function showBodySection(sectionId) {
    // CLOSE NAVIGATION MODAL IF NEEDED
    if (!$("#navigationModal").hasClass('dnone')) {
        toggleModal('navigationModal');
    }
    // ALTER BASIC BREADCRUMBS
    makeBreadcrumbs(sectionId);
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