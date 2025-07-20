gsap.registerPlugin(ScrollTrigger);

      gsap.from(".team-member", {
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3, // εμφάνιση μία-μία
        ease: "power2.out"
      });