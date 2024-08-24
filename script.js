document.addEventListener('mousemove', (event) => {
    gsap.to('#follower', {
        x: event.clientX - 15,
        y: event.clientY - 15,
        duration: 0.2,
        ease: "power3.out"
    });
});

const images = document.querySelectorAll('.images img');

images.forEach(img => {
    img.addEventListener('mouseenter', (event) => {
        gsap.to(img, {
            duration: 0.6,
            scale: 1.1,
            ease: "power3.out"
        });
        createRipple(event, img);
    });

    img.addEventListener('mouseleave', () => {
        gsap.to(img, {
            duration: 0.6,
            scale: 1,
            ease: "power3.out"
        });
    });
});

function createRipple(event, img) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // Get bounding rectangle of the image
    const rect = img.getBoundingClientRect();
    
    // Position the ripple relative to the image
    ripple.style.left = `${event.clientX - rect.left - 50}px`;
    ripple.style.top = `${event.clientY - rect.top - 50}px`;
    
    // Append the ripple to the image's parent
    img.parentElement.appendChild(ripple);
    
    // Animate the ripple using GSAP
    gsap.fromTo(ripple, {
        opacity: 0.5,
        scale: 0
    }, {
        opacity: 0,
        scale: 2,
        duration: 1,
        ease: "power3.out",
        onComplete: () => ripple.remove() // Remove ripple after animation
    });
}
