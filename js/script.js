function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
window.addEventListener("scroll", reveal);

let mediumSVG = document.querySelector('#svgMedium');
let smallSVG = document.querySelector(`#svgSmall`)
if (window.innerWidth > 450){
    smallSVG.style.display="none";
    mediumSVG.style.display="block";
}

$(document).ready(function() {

    function settingModal(target){
        $(target).modal('show');
    }

    $(".electron").click(function() {
       settingModal("#electronModal");
    });
    $(".proton").click(function() {
        settingModal("#protonModal");
     });
     $(".neutron").click(function() {
        settingModal("#neutronModal");
     });
})