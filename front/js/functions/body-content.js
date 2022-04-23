function showBodySection(sectionId) {
    // CLOSE NAVIGATION MODAL IF NEEDED
    if (!$("#navigationModal").hasClass('dnone')) {
        toggleModal('navigationModal');
    }
    // ALTER BASIC BREADCRUMBS
    makeBreadcrumbs(sectionId);
    // ALTER URL HISTORY
    makeSection(sectionId)
    // SHOW SECTION
    $(".content__page").addClass("dnone"); //all sections go hidden
    $("#"+sectionId).removeClass("dnone"); //show selected section
    // ANALYTICS CHANGE
    if (typeof googleAnalytics.map[sectionId] !== 'undefined') {
        googleAnalytics.notify(sectionId);
    }
}

// needs the ID of the Anchor
function scrollToAnchor(sectionId){
    var tag = $("#"+ sectionId);
    // Show parent section if needed
    if(tag.parent().hasClass('dnone')){
        showBodySection(tag.parent());
    }
    // SCROLL TO
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
}