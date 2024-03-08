const brandbelief = (function () {
  let prevScrollTop = 0;

  function _getOffsetTop(element) {
    let offsetTop = 0;
    while (element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop;
  }

  gsap.set(".belief2023-section--01 .belief2023-title", {
    opacity: 0,
    y: 200,
  });

  gsap.to(".belief2023-section--01 .belief2023-title", {
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrub: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: ".belief2023-section--01",
      start: "top bottom",
      end: "bottom",
      toggleActions: "play reverse play reverse",
      // scrub: 1,
    },
  });

  gsap.set(".belief2023-section--01 .belief2023-text-wrap", {
    opacity: 0,
    y: 200,
  });

  gsap.to(".belief2023-section--01 .belief2023-text-wrap", {
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrub: 1,
    opacity: 1,
    delay: 0.1,
    scrollTrigger: {
      trigger: ".belief2023-section--01",
      start: "top bottom",
      end: "bottom",
      toggleActions: "play reverse play reverse",
      // scrub: 1,
    },
  });

  const listItems = Array.from(
    document.getElementsByClassName("belief2023-section--mid")
  );

  listItems.forEach((item, index) => {
    const itemTitle01 = item.getElementsByClassName("belief2023-text-wrap");
    gsap.set(itemTitle01, { opacity: 0, y: 200 });
    gsap.to(itemTitle01, {
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrub: 0.8,
      opacity: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: itemTitle01,
        start: "top bottom",

        toggleActions: "play reverse play reverse",
      },
    });

    const itemImg = item.getElementsByClassName("scroll-img");
    gsap.set(itemImg, { opacity: 0, y: 200 });
    gsap.to(itemImg, {
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrub: 0.8,
      opacity: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: itemImg,
        start: "top bottom",

        toggleActions: "play reverse play reverse",
      },
    });

    const itemSwiper = item.getElementsByClassName("swiper-container");
    gsap.set(itemSwiper, { opacity: 0, y: 200 });
    gsap.to(itemSwiper, {
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrub: 0.8,
      opacity: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: itemSwiper,
        start: "top bottom",

        toggleActions: "play reverse play reverse",
      },
    });
  });

 /*  const jourenySection = (function () {
    const wrapper = document.querySelector(".belief2023-section--joureny");
    const list = wrapper.querySelector(".swiper-list");

    function onInit() {
      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky",
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          // end: () => "+=" + list.offsetWidth,
          start: "top top",
          end: "100%",
        },
        defaults: { ease: "none", duration: 1 },
      });

      timeline
        .add("start")
        .fromTo(
          ".indicator__bar",
          { width: "0%" },
          {
            width: "100%",
          },
          "start"
        )
        .to(
          ".horizontal-scroll__inner",
          {
            x: function () {
              return (
                -(list.scrollWidth - document.documentElement.clientWidth) +
                "px"
              );
            },
          },
          "start"
        );

      ScrollTrigger.refresh();
    }

    function onResize() {}

    return {
      onInit: onInit,
      onResize: onResize,
    };
  })(); */

  // created  스와이퍼
//   const createdSwiper = {
//     wrapper: document.querySelector(".belief2023-section--created"),
//     swiperContainer: null,
//     items: null,
//     paginationContainer: null,
//     prevButton: null,
//     nextButton: null,
//     playButton: null,
//     playButtonText: null,
//     swiperController: null,
//     currentIndex: 0,
//     windowLoaded: false,
//     swiperController: null,

//     onInitBeforeLoad: function () {
//       const instance = this;
//       const wrapper = instance.wrapper;

//       instance.swiperContainer = wrapper.querySelector(".swiper-container");
//       instance.items = wrapper.querySelectorAll(".swiper-slide");

//       if (instance.items.length > 0) {
//         if (!instance.swiperController) {
//           instance.swiperController = new Swiper(instance.swiperContainer, {
//             //모바일
//             slidesPerView: "auto", // 슬라이드 갯수
//             spaceBetween: 0, //여백
//             slidesPerGroup: 1,
//             mobileFirst: true,
//             arrows: false,
//             dots: true,
//             responsive: {
//               breakpoint: 751,
//               settings: "unslick",
//             },

//             loop: false, // 반복
//             speed: 1000, //넘어가는 속도
//             centeredSlides: false, //슬라이드 가운데로 위치
//             watchOverflow: false, //슬라이드가 1개일 떄 버튼 숨김
//             roundLengths: true,
//             slideToClickedSlide: true,

//             on: {
//               slideChange: function (swiper) {
//                 if (instance.windowLoaded) {
//                   instance.swiperSlideChange(instance, swiper);
//                 }
//               },
//             },
//           });
//         }
//       }

//       //mo swiper
//       const vw = window.innerWidth;

//       this.swiperController?.disable();
//       if (vw <= 751) {
//         this.swiperController?.enable();
//       } else {
//         this.swiperController?.disable();
//       }
//     },

//     onResize: function () {
//       const vw = window.innerWidth;

//       this.swiperController?.disable();

//       if (vw <= 751) {
//         this.swiperController?.enable();
//       } else {
//         this.swiperController?.disable();
//       }
//     },
//   };

  //navigation
  const navigationEffect = {
    target: document.querySelector(".navigation"),

    onInitBeforeLoad: function () {
      // navigation 클릭 시 섹션 이동
      const targetSection = document.querySelectorAll(
        ".belief2023-section--common-layout"
      );
      let links = gsap.utils.toArray(".navigation__item");
      links.forEach((a, index) => {
        let element = targetSection[index],
          linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top",
            toggleActions: "play reverse play reverse",
          });

        a.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, {
            duration: 1,
            scrollTo: linkST.start + 30,
          });
        });
      });
    },

    onInit: function () {
      this.onScroll();
    },

    onResize: function () {
      this.onScroll();
    },

    onScroll: function () {
      //fixed
      const navigationWrap = document.querySelector(".navigation-wrap");
      let offsetY = parseInt(_getOffsetTop(navigationWrap));

      const jourenyWrap = document.querySelector(
        ".belief2023-section--joureny"
      );
      const changeTarget = document.querySelectorAll(".navigation__item");
      let jourenyY = parseInt(_getOffsetTop(jourenyWrap));

      if (scrollY >= offsetY) {
        this.target.classList.add("fixed");

        changeTarget.forEach(function (i) {
          if (scrollY >= jourenyY) {
            i.classList.add("change");
          } else {
            i.classList.remove("change");
          }
        });
      } else {
        this.target.classList.remove("fixed");
      }

      //scrollSpy
      const sections = document.querySelectorAll(
        ".belief2023-section--common-layout"
      );
      const item = document.querySelectorAll(".navigation .navigation__item");

      for (i = 0; i < sections.length; i++) {
        let sectionYTop = parseInt(_getOffsetTop(sections[i]));
        let sectionYBottom = parseInt(_getOffsetTop(sections[i + 1]));

        if (
          (scrollY >= sectionYTop && scrollY <= sectionYBottom) ||
          (i == sections.length - 1 && scrollY >= sectionYTop)
        ) {
          item[i].classList.add("active");
        } else {
          item[i].classList.remove("active");
        }
      }
    },
  };

  function onScroll() {
    scrollY = document.documentElement.scrollTop;
    if (scrollY >= prevScrollTop) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }
    navigationEffect.onScroll();

    prevScrollTop = scrollY;
  }

  function onResize() {
    scrollY = document.documentElement.scrollTop;
    navigationEffect.onResize();
    // jourenySection.onResize(scrollY);
    // createdSwiper.onResize();
  }

  function onInitBeforeLoad() {
    scrollY = document.documentElement.scrollTop;
    // createdSwiper.onInitBeforeLoad();
    navigationEffect.onInitBeforeLoad();
  }

  function onInitAfterLoad() {
    scrollY = document.documentElement.scrollTop;
  }

  // export
  return {
    onInitBeforeLoad: onInitBeforeLoad,
    onInitAfterLoad: onInitAfterLoad,
    onScroll: onScroll,
    onResize: onResize,
  };
})();

document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "interactive") {
    brandbelief.onInitBeforeLoad();
  } else if (event.target.readyState === "complete") {
    brandbelief.onInitAfterLoad();
  }
});

window.addEventListener("scroll", function () {
  brandbelief.onScroll();
});

window.addEventListener("resize", function () {
  brandbelief.onResize();
});
