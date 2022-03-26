function optionCookies(optionCookies) {
  if (optionCookies == 0) {
    $("#area-cookies").addClass('dnone');
    localStorage.setItem("showCookies", false);
  } else {
    openFooterLink(7);
  }}

function toggleCookies(showCookies) {
  if (showCookies == "false") {
    $("#area-cookies").addClass('dnone');
    $(".share").addClass("share-down");
  }
}
