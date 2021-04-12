function optionCookies(optionCookies) {
  if (optionCookies == 0) {
    $("#container-cookies").hide();
    localStorage.setItem("showCookies", false);
  } else {
    openFooterLink(7);
  }}
function toggleCookies(showCookies) {
  if (showCookies == "false") {
    $("#container-cookies").hide();
    $(".share").addClass("share-down");
  }
}
