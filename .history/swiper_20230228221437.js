var swiper = new Swiper("#carousel1", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  // grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      400: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
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
}

let n;

document.getElementById("cal1").onclick = function () {
  n = document.getElementById("username").value;
  const c = document.getElementById("rda");
  const f = document.getElementById("rda1");
  if (n < 0 || n > 0) {
      window.alert("Numbers are not accepted. Enter only words!");
  } else if (c.checked) {
      document.getElementById("user").innerHTML = "Mr." + n;
  } else if (f.checked) {
      document.getElementById("user").innerHTML = "Mrs." + n;
  }
}