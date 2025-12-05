// Apply header styles via JavaScript
const headerElement = document.querySelector('header');
if (headerElement) {
    headerElement.style.padding = '0.8rem 0';
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
    logoElement.style.height = '60px';
}

// Apply hero logo styles via JavaScript
const heroLogoElement = document.querySelector('.hero-logo');
if (heroLogoElement) {
    heroLogoElement.style.maxWidth = '1100px';
}

// Apply body padding for fixed header
document.body.style.paddingTop = '95px';

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

// Hide header initially
if (headerElement) {
    headerElement.style.transform = 'translateY(-100%)';
}

// Show header only when hero logo is out of view
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection ? heroSection.offsetHeight : 400;

    if (scrollTop > heroHeight * 0.7) {
        // Hero logo is mostly out of view, show header
        if (scrollTop > lastScrollTop) {
            // Scrolling down - keep header visible
            if (headerElement) {
                headerElement.style.transform = 'translateY(0)';
            }
        } else {
            // Scrolling up - keep header visible
            if (headerElement) {
                headerElement.style.transform = 'translateY(0)';
            }
        }
    } else {
        // Hero logo is still visible, hide header
        if (headerElement) {
            headerElement.style.transform = 'translateY(-100%)';
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Section Navigation
let currentLang = 'fr';

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionName = this.getAttribute('data-section');

        // Hide all sections
        document.querySelectorAll('.main-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show selected section
        const targetSection = document.getElementById(sectionName + '-section');
        if (targetSection) {
            targetSection.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Update active link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Language Translation
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        currentLang = lang;

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Translate all elements with data-fr and data-en
        document.querySelectorAll('[data-fr][data-en]').forEach(element => {
            const text = element.getAttribute('data-' + lang);
            if (text) {
                element.textContent = text;
            }
        });
    });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Create overlay element
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
}

function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', closeMenu);

// Close menu when clicking a nav link on mobile
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            closeMenu();
        }
    });
});

// Close menu on resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Contact Form (Mockup)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('.submit-btn');
        const originalContent = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<span>' + (currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...') + '</span>';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            // Show success message
            submitBtn.innerHTML = '<span>' + (currentLang === 'fr' ? 'Message envoyé !' : 'Message sent!') + '</span> <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            submitBtn.style.borderColor = '#00ff88';
            submitBtn.style.background = 'linear-gradient(135deg, rgba(0, 255, 136, 0.3), rgba(0, 255, 136, 0.1))';

            // Reset form
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                submitBtn.style.borderColor = '';
                submitBtn.style.background = '';
            }, 3000);
        }, 1500);
    });
}
