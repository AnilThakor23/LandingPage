import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
CustomEase.create("lele","0.7, 0, 0.1, 1");

let isPageTransition = false;
    let PageShiftButton1 = document.querySelector(".PageShiftButton1");
    let PageShiftButton2 = document.querySelector(".PageShiftButton2");
    let PageShiftButton3 = document.querySelector(".PageShiftButton3");
   
        PageShiftButton1.addEventListener("click", () => {
            if (isPageTransition) return;
            isPageTransition = true;
            let bg = document.querySelector(".transitionButtons .bgButton");
            let rect1 = document.querySelector(".transitionButtons").getBoundingClientRect();
            let rect2 = PageShiftButton1.getBoundingClientRect();

           
            gsap.to(bg, {
                left: rect2.left - rect1.left + "px",
                onComplete: () => {
                    isPageTransition = false;
                },
            });
        });
        PageShiftButton2.addEventListener("click", () => {
            if (isPageTransition) return;
            isPageTransition = true;
            let bg = document.querySelector(".transitionButtons .bgButton");
            let rect1 = document.querySelector(".transitionButtons").getBoundingClientRect();
            let rect2 = PageShiftButton2.getBoundingClientRect();
             StartWork()
            gsap.to(bg, {
                left: rect2.left - rect1.left + "px",
                onComplete: () => {
                    isPageTransition = false;
                },
            });
        });
        PageShiftButton3.addEventListener("click", () => {
            if (isPageTransition) return;
            isPageTransition = true;
            let bg = document.querySelector(".transitionButtons .bgButton");
            let rect1 = document.querySelector(".transitionButtons").getBoundingClientRect();
            let rect2 = PageShiftButton3.getBoundingClientRect();
            gsap.to(bg, {
                left: rect2.left - rect1.left + "px",
                onComplete: () => {
                    isPageTransition = false;
                },
            });
        });
    



let Home = document.querySelector(".Home");
let Work = document.querySelector(".work");
let About = document.querySelector(".about");
let transitionCenter = document.querySelector(".transition-center");

function StartWork (){
  let tl = gsap.timeline()

  

  gsap.fromTo(transitionCenter,{width:"50vw",height:0,top:"70%"},{
    width:"60vw",
    height:"60vh",
    top:"50%",
    duration:1.25,
    ease:"lele",
    onComplete:()=>{
      About.style.zIndex = 80
      gsap.fromTo(About,{y:"100%" , width:"60vw"},{
         y:"0%",
         width:"100vw",
         duration:0.5
        })
      gsap.to(transitionCenter,{
        width:"100vw",
        height:"100vh",
        duration:0.5,
        ease:"power2.in",
        })
        
    }
  })
//   .to(transitionCenter,{
//     // y:"-100%",
//     width:"100vw",
//     height:"100vh",
//     duration:0.5,
//     ease:"power2.in",
//   },"<").fromTo(Work,{y:"100%"},{
//     y:"0%",
//     duration:0.5
//   })
  
}