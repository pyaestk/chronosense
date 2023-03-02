var swiper = new Swiper(".slide-content", {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".slide-content2", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".slide-content3", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  breakpoints: {
    300: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper2", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//kyaw lin thant

function realtimeClock() {
  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();

  var amPm = (hours < 12) ? "AM" : "PM";

  hours = (hours > 12) ? hours - 12 : hours;

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  document.getElementById('clock').innerHTML =
    hours + "  :  " + minutes + "  :  " + seconds + "   " + amPm;
  var t = setTimeout(realtimeClock, 500);

  document.getElementById('clock1').innerHTML =
    hours + "  :  " + minutes + "  :  " + seconds + "   " + amPm;
  var h = setTimeout(realtimeClock, 500);

  document.getElementById('clock3').innerHTML =
    hours + "  :  " + minutes + "  :  " + seconds + "   " + amPm;
  var j = setTimeout(realtimeClock, 500);
}


let n;

document.getElementById("cal1").onclick = function () {
  n = document.getElementById("k-username").value;

  if (n < 0 || n > 0) {
    window.alert("Numbers are not accepted. Enter only words!");
  } else {
    document.getElementById("user").innerHTML = n;

  }
}