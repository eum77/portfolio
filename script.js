// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        lastScrollY = window.scrollY;
    });
    
    // Hero rotating text animation
    const rotatingTexts = document.querySelectorAll('.text-item');
    let currentIndex = 0;
    
    function rotateText() {
        rotatingTexts[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % rotatingTexts.length;
        rotatingTexts[currentIndex].classList.add('active');
    }
    
    // Start text rotation
    //setInterval(rotateText, 3000);
    
    // Hero section animations
    gsap.timeline()
        .from('.hero-subtitle', { duration: 0.8, y: 30, opacity: 0, ease: 'power2.out' })
        .from('.hero-title', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' }, '-=0.4')
        .from('.hero-description', { duration: 0.8, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.6')
        .from('.hero-image', { duration: 1.2, scale: 0.8, opacity: 0, ease: 'power2.out' }, '-=1');
    
    // Services cards animation
    gsap.fromTo('.service-card', 
        { y: 50, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.services',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Portfolio slider functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance slides
    setInterval(nextSlide, 5000);
    
    // Slide animations
    slides.forEach((slide, index) => {
        gsap.set(slide.querySelector('.slide-text'), { x: 100, opacity: 0 });
        gsap.set(slide.querySelector('.slide-image'), { scale: 1.1 });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && slide.classList.contains('active')) {
                    gsap.to(slide.querySelector('.slide-text'), { x: 0, opacity: 1, duration: 1, ease: 'power2.out' });
                    gsap.to(slide.querySelector('.slide-image'), { scale: 1, duration: 1.5, ease: 'power2.out' });
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(slide);
    });
    
    // Creative Solutions section animation
    gsap.timeline({
        scrollTrigger: {
            trigger: '.creative-solutions',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    })
    .from('.solution-image', { duration: 1, x: -100, opacity: 0, ease: 'power2.out' })
    .from('.section-subtitle', { duration: 0.6, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.5')
    .from('.solutions-right h2', { duration: 0.8, y: 50, opacity: 0, ease: 'power2.out' }, '-=0.3')
    .from('.section-description', { duration: 0.6, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.3')
    .from('.btn-explore', { duration: 0.6, y: 20, opacity: 0, ease: 'power2.out' }, '-=0.2');
    
    // Case Studies animation
    gsap.fromTo('.case-item', 
        { y: 60, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.case-studies',
                start: 'top 70%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Services Detail Cards Animation
    gsap.fromTo('.service-detail-card', 
        { y: 50, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.services-detail',
                start: 'top 70%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Team section animation
    gsap.fromTo('.team-member', 
        { y: 50, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.team',
                start: 'top 70%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Stats counter animation
    function animateCounter(element, target) {
        gsap.to(element, {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }
    
    // Animate all stat numbers
    document.querySelectorAll('.stat-number').forEach((stat, index) => {
        const targets = [3160, 830, 127, 1134];
        stat.textContent = '0';
        animateCounter(stat, targets[index]);
    });
    
    // Testimonials animation
    gsap.timeline({
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    })
    .from('.testimonial-image', { duration: 1, scale: 0.8, opacity: 0, ease: 'power2.out' })
    .from('.testimonial-subtitle', { duration: 0.6, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.5')
    .from('.testimonials blockquote', { duration: 0.8, y: 50, opacity: 0, ease: 'power2.out' }, '-=0.3')
    .from('.testimonial-author', { duration: 0.6, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.3');
    
    // Client logos animation
    gsap.fromTo('.client-logo', 
        { opacity: 0, y: 30 },
        { 
            opacity: 0.6, 
            y: 0, 
            duration: 0.6, 
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.clients',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // CTA section animation
    gsap.timeline({
        scrollTrigger: {
            trigger: '.cta',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    })
    .from('.cta-left h2', { duration: 0.8, y: 50, opacity: 0, ease: 'power2.out' })
    .from('.cta-left p', { duration: 0.6, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.4')
    .from('.cta-character', { duration: 1, scale: 0.8, opacity: 0, ease: 'power2.out' }, '-=0.6')
    .from('.contact-info', { duration: 0.6, x: 50, opacity: 0, stagger: 0.2, ease: 'power2.out' }, '-=0.4');
    
    // Newsletter animation
    gsap.fromTo('.newsletter-form', 
        { y: 50, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.newsletter',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: target, offsetY: 100 },
                    ease: 'power2.inOut'
                });
            }
        });
    });
    
    // Button hover animations
    document.querySelectorAll('.btn, .nav-arrow, .btn-start-project').forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, { duration: 0.3, scale: 1.05, ease: 'power2.out' });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, { duration: 0.3, scale: 1, ease: 'power2.out' });
        });
    });
    
    // Service card hover animations
    document.querySelectorAll('.service-card, .case-item, .team-member').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, { duration: 0.4, y: -10, ease: 'power2.out' });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, { duration: 0.4, y: 0, ease: 'power2.out' });
        });
    });
    
    // Navigation arrows functionality
    document.querySelectorAll('.nav-arrow').forEach(arrow => {
        arrow.addEventListener('click', function() {
            // Add click animation
            gsap.to(this, { duration: 0.1, scale: 0.95 })
                .then(() => gsap.to(this, { duration: 0.2, scale: 1 }));
        });
    });
    
    // Form interactions
    const newsletterInput = document.querySelector('.newsletter-form input');
    if (newsletterInput) {
        newsletterInput.addEventListener('focus', function() {
            gsap.to(this, { duration: 0.3, scale: 1.02, ease: 'power2.out' });
        });
        
        newsletterInput.addEventListener('blur', function() {
            gsap.to(this, { duration: 0.3, scale: 1, ease: 'power2.out' });
        });
    }
    
    // Mobile menu toggle functionality
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate mobile menu
            if (navMenu.classList.contains('active')) {
                gsap.to(navMenu, { duration: 0.3, opacity: 1, y: 0, ease: 'power2.out' });
            } else {
                gsap.to(navMenu, { duration: 0.3, opacity: 0, y: -20, ease: 'power2.out' });
            }
        });
    }
    
    // Parallax effect for hero background
    gsap.to('.hero::before', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Image lazy loading animation
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                gsap.fromTo(img, 
                    { opacity: 0, scale: 1.1 },
                    { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
                );
                imageObserver.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Add loading state management
    window.addEventListener('load', function() {
        // Hide loading spinner if any
        const loader = document.querySelector('.loader');
        if (loader) {
            gsap.to(loader, { duration: 0.5, opacity: 0, onComplete: () => loader.remove() });
        }
        
        // Trigger initial animations
        gsap.set('body', { overflow: 'visible' });
    });
    
    // Add performance optimization
    let ticking = false;
    
    function updateAnimations() {
        // Update any scroll-based animations here
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    });
    
    // Error handling for images
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Image unavailable';
        });
    });
    
    // Add cache control headers simulation
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js').then(function(registration) {
            }, function(err) {
            });
        });
    }
    
    // Initialize tooltips and accessibility features
    document.querySelectorAll('[title]').forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.textContent = this.getAttribute('title');
            tooltip.className = 'custom-tooltip';
            document.body.appendChild(tooltip);
            
            gsap.fromTo(tooltip, 
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.3 }
            );
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.custom-tooltip');
            if (tooltip) {
                gsap.to(tooltip, { 
                    opacity: 0, 
                    y: -10, 
                    duration: 0.3,
                    onComplete: () => tooltip.remove()
                });
            }
        });
    });
    
    
});