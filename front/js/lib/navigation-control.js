window.onpopstate = function(e){
    if(e.state){
        var splitUrl = window.location.href.split('/');
        var urlSection = splitUrl[splitUrl.length-1];

        var urlSectionFound = Object.keys(sections)[0]; // home by default

        if(urlSection !== hostname) {
            $.each(sections, function( key, value ) {
                if (value[0] === urlSection) {
                    urlSectionFound = key;
                    return false; // breaks the .each
                }
            });
        }
        
        showBodySection(urlSectionFound, false);
    }
};