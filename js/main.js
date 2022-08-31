const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 배지 일정부분에서 없애주기
const badgeEl = document.querySelector("header .badges");
// 스크롤 할때마다 함수가 실행 되므로 홈페이지가 무거워질수 있다.
window.addEventListener(
  "scroll",
  // _.throttle(함수, 시간)
  _.throttle(function () {
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// 메인 비쥬얼 순차적으로 나타내기
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: 0.7 * (index + 1),
    opacity: 1,
  });
});

// Swiper JS
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// Swiper Promotion
new Swiper(".promotion .swiper", {
  autoplay: { delay: 5000 },
  loop: true,
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
