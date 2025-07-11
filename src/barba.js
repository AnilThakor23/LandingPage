import barba from '@barba/core';
import gsap from 'gsap';

let currentDispose = null;

barba.init({
  transitions: [{
    name: 'fade',
    async leave({ current }) {
      if (currentDispose) currentDispose(); // cleanup previous canvas
      await gsap.to(current.container, {
        opacity: 0,
        duration: 0.5
      });
    },
    enter({ next }) {
      gsap.from(next.container, {
        opacity: 0,
        duration: 0.5
      });
    }
  }],
  views: [
   
    {
      namespace: 'about',
      async beforeEnter() {
        const module = await import('/src/about.js');
        currentDispose = module.init();
      }
    },
    {
      namespace: 'work',
      async beforeEnter() {
        const module = await import('/src/work.js');
        currentDispose = module.init();
      }
    }
  ]
});
