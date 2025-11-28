// Smooth scrolling for CTA button
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('.features').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add glitch effect on hover
const title = document.querySelector('.glitch');
title.addEventListener('mouseenter', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'glitch 0.3s infinite';
    }, 10);
});

title.addEventListener('mouseleave', function() {
    this.style.animation = 'glitch 3s infinite';
});

// Parallax effect for hero visual
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hologram = document.querySelector('.hologram-circle');

    if (hologram) {
        hologram.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.1}deg)`;
    }
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe manifesto section
const manifesto = document.querySelector('.manifesto-content');
manifesto.style.opacity = '0';
manifesto.style.transform = 'translateY(50px)';
manifesto.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
observer.observe(manifesto);

// Number animation for stats
function animateNumber(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger number animation when stats are visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers[0].textContent = '0%';
            setTimeout(() => {
                animateNumber(statNumbers[0], 100, 2000);
                statNumbers[0].textContent = '100%';
            }, 200);
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const stats = document.querySelector('.stats');
if (stats) {
    statsObserver.observe(stats);
}

// Add cursor glow effect
document.addEventListener('mousemove', function(e) {
    const glow = document.createElement('div');
    glow.style.position = 'fixed';
    glow.style.width = '10px';
    glow.style.height = '10px';
    glow.style.borderRadius = '50%';
    glow.style.background = 'rgba(0, 243, 255, 0.5)';
    glow.style.pointerEvents = 'none';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.transform = 'translate(-50%, -50%)';
    glow.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.8)';
    glow.style.zIndex = '9999';
    glow.style.animation = 'cursorGlow 0.5s ease-out forwards';

    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 500);
});

// Add CSS for cursor glow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes cursorGlow {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
        }
    }
`;
document.head.appendChild(style);
