function openLink(linkNum) {
  var link = "";
  if (linkNum == 1) {
    // site
    link = "http://sm-mvc.wikidot.com/";
  } else if (linkNum == 2) {
    // linkedIn
    link = "https://www.linkedin.com/";
  } else if (linkNum == 3) {
    // Medium
    link = "https://medium.com/";
  } else if (linkNum == 4) {
    // Twitter
    link = "https://twitter.com/";
  } else if (linkNum == 5) {
    // Youtube
    link = "https://www.youtube.com/";
  }
  window.open(link, "_blank");
}