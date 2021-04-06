function showBodySection(sectionId) {
    // CLOSE NAVIGATION MODAL IF NEEDED
    if (!$("#navigationModal").hasClass('dnone')) {
        toggleModal('navigationModal');
    }
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

// Anchor needs tha ID of the Anchor and parentSectionId to show it if it is hidden!
function scrollToAnchor(sectionId, parentSectionId){
    // Show parent section if needed
    showBodySection(parentSectionId);
    // SCROLL TO
    var tag = $("#"+ sectionId +"");
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
}