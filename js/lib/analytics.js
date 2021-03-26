// CONSTANTS
// googleAnalyticsKey should be something like 'UA-XXXXX-Y'
const googleAnalyticsKey = '';

// hostname should be the same as your location.hostname
// console.log(location.hostname); // uncomment to know the location.hostname
const hostname = 'simplyminimalmvc';

// googleAnalyticsSectionsObject has all sections of your site in order to allow navigation information
// lines: "SectionId": ["Name of the section", "virtual url"]
// "SectionId" must be the same ID of the section on HTML that needs to be tracked in analytics
const googleAnalyticsSectionsObject = {
    "generalBodyContentSectionHome": ["Home", "home"],
    "generalBodyContentSectionContactUs": ["Contact Us", "contact"],
};

// Initial code
if (location.hostname === hostname) {
    window.dataLayer = window.dataLayer || [];
    window.ga =
        window.ga ||
        function () {
        (ga.q = ga.q || []).push(arguments);
        };
    ga.l = +new Date();

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", googleAnalyticsKey, {
        send_page_view: false,
        anonymize_ip: true,
    });
}

// ANALYTICS CLASS
var analytics = function(){};
analytics.prototype = {
    ua: '',
    map: {},
    set: function(ua, screenIdToPageName) {
        this.ua = ua;
        this.map = screenIdToPageName || {};
    },
    notify: function(screenId) {
        this.notifyGa(screenId);
        this.notifyGtag(screenId);
    },
    notifyGa: function(screenId) {
        var windowGa = window.ga;
        if (! windowGa) {
            console.log('Not sending "' + screenId + '" to Analytics, no windowGA. Maybe a the HOSTNAME is not ok?');
            return;
        }
        windowGa('send', 'pageview', screenId);
    },
    notifyGtag: function(screenId) {
        var windowGTAG = window.gtag;
        if (! windowGTAG) {
            console.log('Not sending "' + screenId + '" to Analytics, no windowGTAG. Maybe a the HOSTNAME is not ok?');
            return;
        }
    
        var props;
    
        if (this.map.hasOwnProperty(screenId)) {
            props = {
                'page_title': this.map[screenId][0],
                'page_path': this.map[screenId][1]
            };
        } else {
            props = {
                'page_title': screenId,
                'page_path': '/#' + screenId
            };
        }
    
        //console.log('Sending "' + screenId + '" pageview');
    
        try {
            windowGTAG('config', this.ua, props);
        } catch (e) {
            // Send the name of the given screen, or the screen ID
            // if we are not aware of that
            windowGTAG('event', this.map[screenId] || screenId);
        }
    }
}

// INITIALIZE CLASS ANALYTICS
var googleAnalytics = new analytics();
googleAnalytics.set(googleAnalyticsKey, googleAnalyticsSectionsObject);

