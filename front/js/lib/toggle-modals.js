function toggleModal(modalId) {
  // OPEN NORMAL
  if ($("#"+modalId).hasClass('dnone')) {
    // IF OPENING A MODAL from NAVIGATION MENU MODAL, NEED TO CLOSE IT
    if ($("#navigationModal").hasClass('dnone') === false) {
      $("#navigationModal").addClass('dnone');
    }
    $("#body").css("position", "fixed");
    $("#body").css("overflow-y", "scroll");
    $("#"+modalId).removeClass('dnone');
  }else{
    // CLOSE NORMAL
    $("#body").css("position", "static");
    $("#body").css("overflow-y", "auto");
    $("#"+modalId).addClass('dnone');
  }
}
