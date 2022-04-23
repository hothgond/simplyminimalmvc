// googleAnalyticsKey should be something like 'UA-XXXXX-Y'
var googleAnalyticsKey = '';

// hostname should be the same as your location.hostname
// console.log(location.hostname); // uncomment this line see the location.hostname in your console
var hostname = 'simplyminimalmvc';

// googleAnalyticsSectionsObject has all sections of your site to allow navigation information
// lines: "SectionId": ["Name of the section", "virtual url"]
// "SectionId" must be the same ID of the section on HTML that needs to be tracked in analytics
var googleAnalyticsSectionsObject = {
    "home": ["Home", "home"],
    "contactUs": ["Contact Us", "contact"],
    "breadcrumbTest": ["Breadcrumb test", "breadcrumbTest"],
};