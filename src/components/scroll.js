import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
    const t1 = gsap.timeline();

    t1.to(position, {
        x: 5.28,
        y: 3.18,
        z: 11.05,
        scrollTrigger: {
            trigger: '.home-page',
            start: "top bottom",
            end: "top center",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    .to('.home-page', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.vigo-sec',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
    })
    .to('.vigo-sec', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.vig2',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
    })
    .to(position, {
        x: -6.70,
        y: 2.68,
        z: 12.24,
        scrollTrigger: {
            trigger: '.vigo-sec',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    .to(target, {
        x: 5.00,
        y: 0.00,
        z: 0.00,
        scrollTrigger: {
            trigger: '.vigo-sec',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
    })
    .to(position, {
        x: 7.99,
        y: 2.65,
        z: 11.45,
        scrollTrigger: {
            trigger: '.vig2',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    .to(target, {
        x: -5.00,
        y: 0.00,
        z: 0.00,
        scrollTrigger: {
            trigger: '.vig2',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
    })
    .to(position, {
        x: 3.86,
        y: 1.06,
        z: 8.97,
        scrollTrigger: {
            trigger: '.vig3',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        
        },
        onUpdate
    })
    .to(target, {
        x: 2.00,
        y: 0.00,
        z: 0.00,
        scrollTrigger: {
            trigger: '.vig3',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
     
        },
    })
    .to(position, {
        x: 3.86,
        y: 1.06,
        z: 8.97,
        scrollTrigger: {
            trigger: '.vig3',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    .to(target, {
        x: 7.00,
        y: 0.00,
        z: 0.00,
        scrollTrigger: {
            trigger: '.vig3',
            start: "bottom bottom",
            end: "bottom center",
            scrub: 2,
            immediateRender: false,
        },
    });
}
