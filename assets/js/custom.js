$(document).ready(function () {
  var currentPath = location.pathname.split("/").pop();
  if (currentPath === "") {
    currentPath = "index.html";
  }

  $(".navbar-nav li.nav-item a").each(function () {
    var navHref = $(this).attr("href").split("/").pop();
    if (navHref === currentPath) {
      $(".navbar-nav li.nav-item").removeClass("active");
      $(this).closest("li.nav-item").addClass("active");
    }
  });
});

jQuery(document).ready(function ($) {
  var owl = $(".owl-carousel.custom_carosul");
  owl.owlCarousel({
    items: 3,
    margin: 20,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

function setEqualCardHeight() {
  $(".custom_carosul .carousel-items").height("auto");

  let maxHeight = 0;

  $(".custom_carosul .owl-item.active .carousel-items").each(function () {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });

  if (maxHeight > 0) {
    $(".custom_carosul .carousel-items").height(maxHeight);
  }
}

$(document).ready(function () {
  const owl = $(".custom_carosul").owlCarousel({
    onInitialized: setEqualCardHeight,
    onRefreshed: setEqualCardHeight,
  });

  $(window).on("resize", function () {
    setEqualCardHeight();
  });

  setTimeout(setEqualCardHeight, 500);
});

window.onload = function () {
    var loader = document.getElementById("page-loader");
    if (loader) {
       
        loader.classList.add("hide");

        setTimeout(function () {
            loader.remove(); 
        }, 800); 
    }
};


 document.querySelectorAll(".toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const moreText = btn.previousElementSibling;

    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      btn.textContent = "...more";
    } else {
      moreText.style.display = "inline";
      btn.textContent = " less";
    }
  });
});


