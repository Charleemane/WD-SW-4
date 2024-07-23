document.getElementById("myImg");
var link = document.getElementById("myImg");

function clickImg() {
  window.location = "../../pages/feature-1/index.html"
  if (link.onclick) {
    window.open(window.location)
  }
}