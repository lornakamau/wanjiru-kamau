import { gsap } from 'gsap';
import { randomFloat } from './utils';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class Revealer {
    constructor() {
        this.options = {
            duration: 1,
            panelDelay: 0.15
        };
        this.gridItems = [...document.querySelectorAll('.grid__item')];
        console.log(this.gridItems)
        this.createTimeline();
    }
    createTimeline() {
        this.tl = gsap.timeline({paused: false, scrollTrigger:{
            trigger: '.grid',
            start: "top 85%",
            end: "bottom 10%",
            markers: true,
            scrub: true,
            toggleActions: "play none none reverse"
        } });

        this.tl.addLabel('halfway', this.options.panelDelay*1 + this.options.duration)
        .fromTo(this.gridItems, {y: () => randomFloat(50,250)}, {
            duration: this.options.duration,
            ease: 'Expo.easeOut',
            y: 0,
            opacity: 1,
        });  
    }
    // reveal() {
    //     this.tl.restart();
    // }
}
// this.tl = gsap.timeline({paused: false, scrollTrigger:{
//     triggerElement: '.main-content',
//     start: "40% 90%",
//     end: "bottom 10%",
//     markers: true,
//     scrub: true,
// } });