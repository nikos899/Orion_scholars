
  gsap.registerPlugin(ScrollTrigger);

  const sections = ['.math', '.physics', '.computer_science', '.electronics'];

  sections.forEach((selector, index) => {
    const el = document.querySelector(selector);
    if (!el) return; // skip if selector doesn't exist

    gsap.fromTo(el,
      {
        opacity: 0.1,
        y: 50, // animate from 50px down
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });