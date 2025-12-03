// Apply header styles via JavaScript
const headerElement = document.querySelector('header');
if (headerElement) {
    headerElement.style.padding = '0.7rem 0';
    headerElement.style.position = 'fixed';
    headerElement.style.top = '0';
    headerElement.style.left = '0';
    headerElement.style.right = '0';
    headerElement.style.zIndex = '100';
    headerElement.style.transition = 'transform 0.3s ease-in-out';
    headerElement.style.background = 'rgba(8, 8, 8, 0.95)';
    headerElement.style.backdropFilter = 'blur(10px)';
}

// Apply logo styles via JavaScript
const logoElement = document.querySelector('.logo');
if (logoElement) {
    logoElement.style.height = '90px';
}

// Apply hero logo styles via JavaScript
const heroLogoElement = document.querySelector('.hero-logo');
if (heroLogoElement) {
    heroLogoElement.style.maxWidth = '1100px';
}

// Apply body padding for fixed header
document.body.style.paddingTop = '120px';

// Smooth scrolling for CTA button
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('.features').scrollIntoView({
        behavior: 'smooth'
    });
});

// Subtle glow effect on hero logo hover
const heroLogo = document.querySelector('.hero-logo');
if (heroLogo) {
    heroLogo.addEventListener('mouseenter', function() {
        this.style.filter = 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.5))';
    });

    heroLogo.addEventListener('mouseleave', function() {
        this.style.filter = 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.2))';
    });
}

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
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
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Fade effect for feature details sections
const fadeOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = '0.3';
            entry.target.style.transform = 'translateY(20px)';
        }
    });
}, fadeOptions);

// Apply fade effect to all feature detail sections
document.querySelectorAll('.feature-detail').forEach(section => {
    section.style.opacity = '0.3';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 1s ease, transform 1s ease';
    fadeObserver.observe(section);
});

// Observe manifesto section
const manifesto = document.querySelector('.manifesto-content');
if (manifesto) {
    manifesto.style.opacity = '0';
    manifesto.style.transform = 'translateY(30px)';
    manifesto.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(manifesto);
}

// Number animation for perfection stat
function animateNumber(element, target, suffix = '', duration = 1500) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

// Trigger number animation when stats are visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const perfectionStat = document.querySelector('.stat-number');
            if (perfectionStat && perfectionStat.textContent === '99%') {
                perfectionStat.textContent = '0%';
                setTimeout(() => {
                    animateNumber(perfectionStat, 99, '%', 2000);
                }, 200);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const stats = document.querySelector('.stats');
if (stats) {
    statsObserver.observe(stats);
}

// Hide header on scroll down, show on scroll up
let lastScrollTop = 0;
const scrollThreshold = 50; // Start hiding after 50px of scroll

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (headerElement) {
                headerElement.style.transform = 'translateY(-100%)';
            }
        } else {
            // Scrolling up
            if (headerElement) {
                headerElement.style.transform = 'translateY(0)';
            }
        }
    } else {
        // At the top of the page, always show header
        if (headerElement) {
            headerElement.style.transform = 'translateY(0)';
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);
