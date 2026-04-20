// Init Lucide Icons
lucide.createIcons();

// Reveal on scroll standard logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Flashlight Hover Effect Logic
document.querySelectorAll('.flashlight-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Smooth Scroll with Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// UI Intro Entry Animations (Replacing scrub logic with elegant fading)
const tlEntry = gsap.timeline({ delay: 0.3 });
tlEntry.fromTo(".hero-anim",
    { y: 30, opacity: 0, filter: "blur(8px)" },
    { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.08, ease: "power3.out" }
);

// Navigation fade in
gsap.fromTo("nav",
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.1 }
);

// Native Autoplay fallback force for Safari/Mobile devices
const heroVid = document.getElementById('heroVideo');
if (heroVid) {
    heroVid.play().catch((e) => {
        console.log("Autoplay was caught by browser", e);
        // Can trigger a play button interaction here if needed
    });
}

// Meta Pixel - InitiateCheckout on CTA buttons
document.querySelectorAll('a[href^="https://wa.link/"]').forEach(btn => {
    btn.addEventListener('click', () => {
        if (typeof fbq === 'function') {
            fbq('track', 'InitiateCheckout');
        }
    });
});
