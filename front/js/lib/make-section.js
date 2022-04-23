function makeBreadcrumbs(sectionId){
    if($( ".header__container-breadcrumbs div" ).length > 1){
        $( ".header__container-breadcrumbs div" ).not(':first').remove();
    }
    if(sectionId != 'home' && breadcrumbs.hasOwnProperty(sectionId)){
        var breadcrumbInUse = breadcrumbs[sectionId];
        var breadcrumbTranslation = '';
        $.each(breadcrumbInUse[1], function(i, b) {
            breadcrumbTranslation = getTranslationByKey(b[0]);
            $( ".header__container-breadcrumbs" ).append(
                '<div class="breadcrumb active" onclick="showBodySection(\''+b[1]+'\')" key="'+b[0]+'">'+breadcrumbTranslation+'</div>'
            );
        });
        breadcrumbTranslation = getTranslationByKey(breadcrumbInUse[0]);
        $( ".header__container-breadcrumbs" ).append(
            '<div class="breadcrumb inactive" key="section-'+sectionId+'">'+breadcrumbTranslation+'</div>'
        );
    }
}

function makeSection(sectionId){
    if(sections.hasOwnProperty(sectionId)){
        var sectionInUse = sections[sectionId];
        var sectionTranslation = '';
        sectionTranslation = getTranslationByKey(sectionId);
        history.pushState({pageID: sectionId}, sectionTranslation, sectionInUse[0]);
    }
}