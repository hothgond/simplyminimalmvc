function toggleModal(modalId) {
  if ($("#"+modalId).hasClass('dnone')) {
    $("#body").css("position", "fixed");
    $("#body").css("overflow-y", "scroll");
    $("#"+modalId).removeClass('dnone');
  }else{
    $("#body").css("position", "static");
    $("#body").css("overflow-y", "auto");
    $("#"+modalId).addClass('dnone');
  }
}
