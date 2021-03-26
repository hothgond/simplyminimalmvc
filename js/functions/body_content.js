function showBodySection(sectionId) {
    // ALTER BASIC BREADCRUMBS
    if($( ".header__container-breadcrumbs div" ).length > 1){
        $( ".header__container-breadcrumbs div" ).last().remove();
    }
    if(sectionId != 'generalBodyContentSectionHome'){
        var breadcrumbTranslation = getTranslationByKey('section-'+sectionId);
        $( ".header__container-breadcrumbs" ).append(
            '<div class="breadcrumb inactive" key="section-'+sectionId+'">'+breadcrumbTranslation+'</div>'
        );
    }
    // SHOW SECTION
    $(".generalbody__content_section").addClass("dnone"); //all sections go hidden
    $("#"+sectionId).removeClass("dnone"); //show selected section
    // ANALYTICS CHANGE
    if (typeof googleAnalytics.map[sectionId] !== 'undefined') {
        googleAnalytics.notify(sectionId);
    }
}

function scrollToAnchor(sectionId){
    var tag = $("#"+ sectionId +"");
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
}