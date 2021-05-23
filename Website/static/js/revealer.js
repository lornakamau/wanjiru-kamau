import { gsap } from 'gsap';
import { randomFloat } from './utils';

export default class Revealer {
    constructor() {
        this.options = {
            duration: 1,
            panelDelay: 0.15
        };
        this.gridItems = [...document.querySelectorAll('.grid__item')];
        this.createTimeline();
    }
    createTimeline() {
        this.tl = gsap.timeline({paused: true});

        this.tl.addLabel('halfway', this.options.panelDelay*1 + this.options.duration)
        .fromTo(this.gridItems, {y: () => randomFloat(100,500)}, {
            duration: this.options.duration*2,
            ease: 'Expo.easeOut',
            y: 0,
            opacity: 1
        }, 'halfway');  
    }
    reveal() {
        this.tl.restart();
    }
}