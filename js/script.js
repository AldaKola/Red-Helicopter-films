/*Preloader */
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').fadeOut();
});

/* HomePage */

/* Hamburger Menu Bar */
function initHamburger() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    const js_content_blur = document.getElementById("js_content_blur");
    let open = false;
  
    function change() {
      if (!open) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
        js_content_blur.style.filter = "blur(6px)";
        document.body.style.overflow = "hidden";
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
        js_content_blur.style.filter = "none";
        document.body.style.overflow = "auto";
      }
      open = !open;
    }
  
    hamburger.addEventListener("click", change);
};

initHamburger();

function removeOverlay() {
  overlay.classList.add("hidden");
}



// Smooth scrolling
$(function() { 
    $("a.smooth-scroll").click(function(event){

        event.preventDefault();
        // get section id like #home, #services ect.
        var section_id = $(this).attr("href");

        $("html, body").animate({
          scrollTop: $(section_id).offset().top -64
        }, 1250, "easeInOutExpo");

      
    });

});

// New Section Read More
// First Read More Button
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// Second Read More Button
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


