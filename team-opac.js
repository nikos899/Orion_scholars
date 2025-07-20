gsap.from(".team-member", {
        y: 30,
        opacity: 0,
        duration: 5,
        ease: "power2.out",
        stagger: 1  // Εμφανίζονται η μία μετά την άλλη
      });