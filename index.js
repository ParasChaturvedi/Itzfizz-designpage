
document.addEventListener("DOMContentLoaded", function () {
    const letterElement = document.getElementById("t");
  
    let animationStartTime;
    const animationDuration = 3000;
  
    function startAnimation() {
      animationStartTime = performance.now();
      animate();
    }
  
    function animate() {
      const currentTime = performance.now();
      const elapsedTime = currentTime - animationStartTime;
  
      if (elapsedTime < animationDuration) {
        const progress = elapsedTime / animationDuration;
        const path = "abcdefghijklmnopqrst";
        const currentPos = Math.floor(progress * path.length);
        letterElement.textContent = path[currentPos];
  
        requestAnimationFrame(animate);
      } else {
        letterElement.textContent = "n";
      }
    }
  
    startAnimation();
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.to(".hero-bg-black", {
    height: "120vh",
    scrollTrigger: {
      trigger: ".individualchar",
      start: "50% center",
      end: "bottom top",
      scrub: true,
      pin: true,
      // markers: true,
    },
  });
  
  // Section 4 Cards ANimations
  
  let cards = document.querySelectorAll(".individual-card");
  let stackArea = document.querySelector(".stack-area");
  
  function rotateCards() {
    let angle = 0;
    cards.forEach((card) => {
      if (card.classList.contains("active")) {
        card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
      } else {
        card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        angle = angle - 10;
      }
    });
  }
  
  rotateCards();
  
  window.addEventListener("scroll", () => {
    let proportion = stackArea.getBoundingClientRect().top / window.innerHeight;
    if (proportion <= 0) {
      let n = cards.length;
      let index = Math.ceil((proportion * n) / 2);
      index = Math.abs(index) - 1;
      for (let i = 0; i < n; i++) {
        if (i <= index) {
          cards[i].classList.add("active");
        } else {
          cards[i].classList.remove("active");
        }
      }
      rotateCards();
    }
  });
  
  //Code for responsiveness
  
  // function adjust() {
  //   let windowWidth = window.innerWidth;
  //   let left = document.querySelector(".left");
  //   left.remove();
  //   if (windowWidth < 800) {
  //     stackArea.insertAdjacentElement("beforebegin", left);
  //   } else {
  //     stackArea.insertAdjacentElement("afterbegin", left);
  //   }
  // }
  // adjust();
  
  // //detect Resize
  
  // window.addEventListener("resize", adjust);
  
  // Section 8
  
  function changeStatus(x) {
    const sections = document.querySelectorAll(".principal-section");
    if (sections[x].dataset.status === "close") {
      for (let i = 0; i < sections.length; i++) {
        sections[i].dataset.status = "close";
      }
      sections[x].dataset.status = "open";
    }
  }
  
  // Section 6 carousels
  
  // Data for carousel items
  const carouselItems = [
    {
      text: "Wildleaf",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg1.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg1.png",
      tag3: "Wildleaf",
      tag1: "Dexwin",
      tag4: "Content Whale",
      tag2: "Tipplr",
    },
    {
      text: "Tipplr",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg2.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg2.png",
      tag3: "Tipplr",
      tag4: "Wildleaf",
      tag2: "Dexwin",
      tag1: "Content Whale",
    },
    {
      text: "Dexwin",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg3.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg3.png",
      tag4: "Tipplr",
      tag1: "Wildleaf",
      tag2: "Dexwin",
      tag3: "Content Whale",
    },
    {
      text: "Content Whale",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg4.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg4.png",
      tag4: "Tipplr",
      tag1: "Content Whale",
      tag3: "Wildleaf",
      tag2: "Dexwin",
    },
    {
      text: "Pear 5",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg5.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg5.png",
      tag4: "Wildleaf",
      tag1: "Dexwin",
      tag2: "Tipplr",
      tag3: "Content Whale",
    },
    {
      text: "Pear 6",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg6.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg6.png",
      tag4: "Wildleaf",
      tag1: "Dexwin",
      tag2: "Tipplr",
      tag3: "Content Whale",
    },
    {
      text: "Pear 7",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg7.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg7.png",
      tag4: "Wildleaf",
      tag1: "Dexwin",
      tag2: "Tipplr",
      tag3: "Content Whale",
    },
    {
      text: "Pear 8",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg8.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg8.png",
      tag4: "Wildleaf",
      tag1: "Dexwin",
      tag2: "Tipplr",
      tag3: "Content Whale",
    },
    {
      text: "Pear 9",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg9.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg9.png",
      tag4: "Wildleaf",
      tag1: "Dexwin",
      tag2: "Tipplr",
      tag3: "Content Whale",
    },
    {
      text: "Pear 10",
      mobileImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/mobileimg10.png",
      tabletImg: "https://itzfizzdigital.b-cdn.net/Design%20Page%20assets/tabimg10.png",
      tag4: "Wildleaf",
      tag1: "Dexwin",
      tag2: "Tipplr",
      tag3: "Content Whale",
    }
  ];
  
  
  const carouselButtons = document.querySelectorAll(".carousel-button");
  const carouselHeading = document.querySelector(".carousel-heading");
  const mobileCarouselImg = document.querySelector(".mobile-carousel-img");
  const tabletCarouselImg = document.querySelector(".tablet-carousel-img");
  const tag_1 = document.querySelector(".tag1");
  const tag_2 = document.querySelector(".tag2");
  const tag_3 = document.querySelector(".tag3");
  const tag_4 = document.querySelector(".tag4");
  
  let currentIndex = 0;
  
  function updateCarousel() {
    const currentItem = carouselItems[currentIndex];
    carouselHeading.style.opacity = 0;
    carouselHeading.style.transform = 'translateX(-350px)';
  
    mobileCarouselImg.style.opacity = 0;
    mobileCarouselImg.style.transform = 'scale(1.1)';
  
    tabletCarouselImg.style.opacity = 0;
    tabletCarouselImg.style.transform = 'scale(1.1)';
  
    tag_1.style.transform = 'translateY(50px)';
    tag_2.style.transform = 'translateY(50px)';
    tag_3.style.transform = 'translateY(50px)';
    tag_4.style.transform = 'translateY(50px)';
  
    setTimeout(() => {
      carouselHeading.textContent = currentItem.text;
      carouselHeading.style.opacity = 1;
      carouselHeading.style.transform = 'translateX(0)';
      
      mobileCarouselImg.src = currentItem.mobileImg;
      mobileCarouselImg.style.opacity = 1;
      mobileCarouselImg.style.transform = 'scale(1)'; 
      
      tabletCarouselImg.src = currentItem.tabletImg;
      tabletCarouselImg.style.opacity = 1;
      tabletCarouselImg.style.transform = 'scale(1)'; 
      
      tag_1.textContent = currentItem.tag1;
      tag_1.style.transform = 'translateY(0)';
  
      tag_2.textContent = currentItem.tag2;
      tag_2.style.transform = 'translateY(0)';
  
      tag_3.textContent = currentItem.tag3;
      tag_3.style.transform = 'translateY(0)';
  
      tag_4.textContent = currentItem.tag4;
      tag_4.style.transform = 'translateY(0)';
    }, 300);
  }
  
  carouselButtons.forEach(function(button) {
    button.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    });
  });
  
  let mobileWidth = 640;
  let tabWidth = 1080;
  let  deskWidth = 1220;
  let pWidth, pHeight, screenWidth, screenHeight;
  let index = document.getElementsByClassName("quote-column");
  let pTransition = 3;
  let activeShow = "col-active";
  const arrowIcon = "<div class='arrow left-arrow ' onclick='arrowControl(-1)'><i class='arrow-icon'><i></div><div class='arrow right-arrow' onclick='arrowControl(1)'><i class='arrow-icon'><i></div>"
  const ArrowParent = document.createElement("div");
  ArrowParent.classList.add("arrows-wrap");
  ArrowParent.innerHTML = arrowIcon;
  let arrowEnabled = false;
  let activeQuoteHeight = 400;
  
  getElem();
  function getElem() {
      let hAndW;
      let targetElem;
      index[0].parentElement.style.minHeight = (index.length / 2) * 140 + "px";// assign row element height
  
      for (let i = 0; i < index.length; i++) {
          targetElem = index[i];
          pWidth = targetElem.parentElement.offsetWidth;
          pHeight = targetElem.parentElement.offsetHeight;
  
          //When viewing on desktop
          if (screenWidth > tabWidth) {
              hAndW = randomPos(60, (screenHeight / (index.length / 1.5))) + 'px';//Lets make the height and width variables randomly
  
              // lets devide all the elements by less then 2 and positioning them left and right not in the middle;
              //this is for left side
              if (i < index.length / 1.9) {
                  targetElem.style.left = randomPos(100, targetElem.parentElement.offsetWidth / 3 - 100) + 'px'; // X position left
                  targetElem.style.top = (targetElem.parentElement.offsetHeight / (index.length / 2)) * (i - 1) + 'px'; //Y position left
              }
              // this is for right side
              else if (i > index.length / 1.9) {
                  targetElem.style.right = randomPos(100, targetElem.parentElement.offsetWidth / 3 - 100) + 'px'; // X position right
                  targetElem.style.left = 'auto'; // X position right
                  targetElem.style.top = (targetElem.parentElement.offsetHeight / (index.length / 2)) * ((index.length - 1) - i) + 'px'; //Y position right
              }
              if (arrowEnabled) ArrowParent.style.display = "block";// When arrow added make them visible
              else ArrowParent.style.display = "none";// When arrow added make them hidden
          }
  
          //When viewing on tab
          if (screenWidth <= tabWidth && screenWidth >= mobileWidth) {
              hAndW = randomPos(30, (screenHeight / (index.length / 1.5))) + 'px';
              targetElem.parentElement.style.minHeight = "70vh";
              targetElem.style.bottom = '0px'; //Y position
              targetElem.style.left = (targetElem.parentElement.offsetWidth) / (index.length - 1) * (i - 1) + 'px'; // X position left
              targetElem.style.zIndex = '100'; //Y position
              targetElem.style.top = 'auto'; //Y position
              if (arrowEnabled) ArrowParent.style.display = "block";// When arrow added make them visible
              else ArrowParent.style.display = "none";// When arrow added make them visible
          }
  
          //When viewing on mobile
          if (screenWidth < mobileWidth) {
              targetElem.style.left = '50%'; // X position left
              ArrowParent.style.display = "block";// When arrow added make them visible
          }
          else if (!arrowEnabled) ArrowParent.style.display = "none";// otherwise hidden
  
          //after all the work done lets sizing the element
          targetElem.style.width = hAndW;
          targetElem.style.height = hAndW;
          //and the active one position default
          if (i != 0) {
              targetElem.addEventListener('click', quoteShow, false); //So we dont need click event on the active one
          }
          targetElem.classList.add("moves");
      }
      setTimeout(() => {
          for (let i = 0; i < index.length; i++) {
              //     targetElem.style.transition = "0s";
          }
      }, 2000);
  }
  
  
  let clickCheck = true, showClear, showClear2;
  function quoteShow(evt) {
    const style = getComputedStyle(this);
    console.log(style);
      if (clickCheck) {
          clickCheck = false;
          clearTimeout(showClear2);
          let activeQuote = document.getElementsByClassName(activeShow);
          let aq;
          for (let j = 0; j < activeQuote.length; j++) {
              aq = activeQuote[j];
              aq.classList.remove("show");
              aq.style.transition = "0.4s";
          }
          this.style.transition = "0.4s";
          setTimeout(() => {
              aq.style.top = this.offsetTop + "px";
              aq.style.left = this.offsetLeft + "px";
              aq.style.width = this.offsetWidth + "px";
              aq.style.height = this.offsetHeight + "px";
              aq.addEventListener('click', quoteShow, false);
              aq.classList.remove(activeShow);
          }, 600);
  
          setTimeout(() => {
              this.classList.add(activeShow);
              this.removeEventListener("click", quoteShow, false);
          }, 1200);
  
          showClear2 = setTimeout(() => {
              this.classList.toggle("show");
              aq.style.transition = "";
              this.style.transition = "";
              clickCheck = true;
          }, 1800);
      }
  }
  
  let arrowClicked = true; nowActive = 0;
  
  
  function arrowControl(val) {
      // else nowActive += val;
      if (arrowClicked) {
          arrowClicked = false;
          for (let i = 0; i < index.length; i++) {
              index[nowActive].classList.remove("show");
              index[nowActive].style.transition = ".4s";
              index[nowActive].addEventListener('click', quoteShow, false);
          }
          setTimeout(() => {
              for (let j = 0; j < index.length; j++) {
                  index[j].classList.remove(activeShow);
              }
              nowActive += val;
              if (nowActive > index.length - 1) nowActive = 0;
              else if (nowActive < 0) nowActive = index.length - 1;
          }, 600);
  
          setTimeout(() => {
              index[nowActive].classList.add(activeShow);
              index[nowActive].removeEventListener("click", quoteShow, false);
          }, 610);
  
          setTimeout(() => {
              index[nowActive].classList.toggle("show");
              index[nowActive].style.transition = "";
              arrowClicked = true
          }, 1800);
      }
  }
  
  function randomPos(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getScreenSize() {
      screenWidth = window.innerWidth;
      screenHeight = window.innerHeight;
      getElem();
  }
  
  window.onresize = getScreenSize;
  window.addEventListener('resize', getScreenSize);
  window.addEventListener('load', function () {
      getScreenSize();
      getElem();
  }, true);
  
  function arrowFunc() {
      try {
          index[0].parentElement.appendChild(ArrowParent);// try insert arrow element for slide control
      } catch (error) { }
  }
  arrowFunc();
  
  
  
  
  //Flaoting animation class;
  class MoveAnim {
      constructor(max, tm) {
          this.time = tm;
          if (Math.random() > .5) this.uDVal = max; else this.uDVal = 0;
          if (Math.random() > .5) this.lRVal = max; else this.lRVal = 0;
          this.max = max;
          if (Math.random() > .5) this.uD = false; else this.uD = true;
          if (Math.random() > .5) this.lR = false; else this.lR = true;
          this.upDown(this.max);
          this.leftRight(this.max);
          this.scale = .01;
      }
  
      upDown() {
          setInterval(() => {
              if (!this.uDVal) {
                  if (this.uD >= this.max) { this.uDVal = true; }
                  if (this.uD < this.max) { this.uD += this.scale; }
              }
              else if (this.uDVal) {
                  if (this.uD <= -this.max) { this.uDVal = false; }
                  if (this.uD >= -this.max) { this.uD -= this.scale; }
              }
              return this.uD;
          }, this.time / 1000);
      }
      leftRight() {
          setInterval(() => {
              if (!this.lRVal) {
                  if (this.lR >= this.max) { this.lRVal = true; }
                  if (this.lR < this.max) { this.lR += this.scale; }
              }
              else if (this.lRVal) {
                  if (this.lR <= -this.max) { this.lRVal = false; }
                  if (this.lR >= -this.max) { this.lR -= this.scale; }
              }
              return this.lR;
          }, this.time / 1000);
      }
  
      letMove(el, ud = false, lr = false) {
  
          setInterval(() => {
              if (ud === true && lr === false) {
                  el.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + 0 + "," + this.uD + ", 0, 1)";
              }
              else if (ud === false && lr === true) {
                  el.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + this.lR + "," + 0 + ", 0, 1)";
              }
              else {
                  el.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + this.lR + "," + this.uD + ", 0, 1)";
              }
  
  
          }, 1);
      }
  
      start(elem, ud, lr) {
          this.letMove(elem, ud, lr);
          this.upDown();
          this.leftRight();
      }
  }
  
  class ShowAnim {
      constructor(mElem, dist, times) {
          this.mElem = document.getElementsByClassName(mElem);
          this.pElem = mElem.parentElement;
          this.cElem = mElem.children;
          this.count = 0;
          this.max = dist;
          this.min = 10;
          this.times = times;
          this.randomCount(this.max);
      }
      randomCount(max) {
          return Math.floor(Math.random() * (max - this.min + 1)) + this.min;
      }
      show(ud, lr) {
          for (this.count = 0; this.count < this.mElem.length; this.count++) {
              this.moveanim = new MoveAnim(this.randomCount(this.max), this.times,);
              this.moveanim.start(this.mElem[this.count], ud, lr);
          }
      }
  }
  
  
  let animShow = new ShowAnim("moves", 40, 50);// Element, Max Distance, Times in milliseconds
  
  //Start floating
  animShow.show(true, true);// Up-Down, Left-Right;
  
  
  /*;-------------------------------------------------
                      GSAP
  -------------------------------------------------;*/
  
  
  let tl2 = gsap.timeline({scrollTrigger:{
      trigger:".section-3",
      start:"top 0%",
      // end:"bottom center",
    // markers:true,
    scrub:true,
    pin: false,
  //   markers:true,
      toggleActions:"restart none none reset"
  }})
  tl2.to('.sect-3-left',{
    yPercent: 50,
    ease: "none",
  
  }, 'section-3')
  tl2.to('.sect-3-right',{
    yPercent: 50,
    ease: "none",
  
  }, 'section-3')
  
  
  // ----------------------------------
  
  
  let tl4= gsap.timeline({scrollTrigger:{
      trigger:".section-5",
      start:"top 0%",
      // end:"bottom center",
    // markers:true,
    scrub:true,
      toggleActions:"restart none none reset"
  }})
  tl4.to('.sect-5-left-asset',{
    yPercent: 400,
    ease: "none",
  
  }, 'section-5')
  tl4.to('.sect-5-right-asset',{
    yPercent: 150,
    ease: "none",
  
  }, 'section-5')
  
  
  // --------------------------------------------
  
  let tl5= gsap.timeline({scrollTrigger:{
      trigger:".section-6",
      start:"top 0%",
      // end:"bottom center",
    // markers:'true',
    scrub:true,
      toggleActions:"restart none none reset"
  }})
  tl5.to('.sect-6-left-asset',{
    yPercent: 40,
    ease: "none",
  
  }, 'section-6')
  tl5.to('.sect-6-right-asset',{
    yPercent: 50,
    ease: "none",
  
  }, 'section-6')
  
  // -----------------------------------------
  
  
  let tl7= gsap.timeline({scrollTrigger:{
      trigger:".section-7",
      start:"top 10%",
      // end:"bottom center",
    // markers:true,
    scrub:true,
      toggleActions:"restart none none reset"
  }})
  tl7.to('.sect-7-left-asset',{
    yPercent: 20,
    ease: "none",
  
  }, 'section-7')
  tl7.to('.sect-7-right-asset',{
    yPercent: 20,
    ease: "none",
  
  }, 'section-7')
  
  
  // --------------------------
  
  
  let tl8= gsap.timeline({scrollTrigger:{
      trigger:".section-7",
      start:"bottom 10%",
      // end:"bottom center",
    // markers:true,
    scrub:true,
      toggleActions:"restart none none reset"
  }})
  tl8.to('.faqquestion',{
    yPercent: -20,
    ease: "none",
  
  }, 'section-8')
  

gsap.registerPlugin(ScrollTrigger);

function animateOnScroll(element) {
  gsap.to(element, {
    x: 0,
    scrollTrigger: {
      scrub: true,
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      // markers: true,
    },
  });
}

animateOnScroll(".divM1");
animateOnScroll(".divM2");
animateOnScroll(".divM3");
animateOnScroll(".divM4");
animateOnScroll(".divM5");