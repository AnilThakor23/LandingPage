import { gsap } from "gsap";

let isAnimating = false;
let index = 0

let wrapCanvas1 = document.querySelector(".wrapCanvas1")

window.addEventListener("wheel", (e) => {
  
  if (isAnimating) return;
  isAnimating = true; 
  let direction = Math.sign(e.deltaY)
  
  if(direction === 1) {
    document.querySelector("body").style.cursor = "grab"
    gsap.to(wrapCanvas1, {
      width: "0vw",
      height: 0,
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        isAnimating = false;
      }
    });
    
  }
  else {
    gsap.to(wrapCanvas1, {
      width: "100vw",
      height: "100vh",
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        isAnimating = false;
      }
    });
  }
  

  // ✅ Your animation
});
