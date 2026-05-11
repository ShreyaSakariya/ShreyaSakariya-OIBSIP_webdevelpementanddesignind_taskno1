/* =========================================
   NexaFlow Landing Page — JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ── Navbar Scroll Effect ──
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ── Mobile Menu Toggle ──
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // ── Smooth Scroll for Nav Links ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });

    // ── Scroll Animations (Intersection Observer) ──
    const animateElements = () => {
        const selectors = [
            '.feature-card',
            '.step-card',
            '.testimonial-card',
            '.pricing-card',
            '.cta-card',
            '.brands-grid'
        ];

        const elements = document.querySelectorAll(selectors.join(','));

        elements.forEach(el => el.classList.add('animate-on-scroll'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Stagger the animation
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 80);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -60px 0px'
            }
        );

        elements.forEach(el => observer.observe(el));
    };

    animateElements();

    // ── Counter Animation for Stats ──
    const animateCounter = (element, target, suffix = '') => {
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            if (target >= 1000) {
                element.textContent = Math.floor(current / 1000) + 'K+';
            } else if (suffix === '%') {
                element.textContent = current.toFixed(1) + '%';
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 25);
    };

    const statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const text = stat.textContent;
                        if (text.includes('50K')) {
                            animateCounter(stat, 50000);
                        } else if (text.includes('99.9')) {
                            animateCounter(stat, 99.9, '%');
                        } else if (text.includes('10M')) {
                            stat.textContent = '10M+';
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    const heroStats = document.getElementById('hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // ── Chart Bar Animation ──
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach((bar, i) => {
        bar.style.animationDelay = `${i * 0.1}s`;
    });

    // ── Pricing Card Hover Effect — Mouse Glow ──
    document.querySelectorAll('.pricing-card, .feature-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ── CTA Email Form ──
    const ctaSubmit = document.getElementById('cta-submit');
    const ctaEmail = document.getElementById('cta-email');

    if (ctaSubmit && ctaEmail) {
        ctaSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            const email = ctaEmail.value.trim();
            if (email && email.includes('@')) {
                ctaSubmit.textContent = '✓ You\'re In!';
                ctaSubmit.style.background = '#22c55e';
                ctaSubmit.style.color = '#fff';
                ctaEmail.value = '';
                setTimeout(() => {
                    ctaSubmit.textContent = 'Get Started Free';
                    ctaSubmit.style.background = '';
                    ctaSubmit.style.color = '';
                }, 3000);
            } else {
                ctaEmail.style.borderColor = '#ef4444';
                ctaEmail.placeholder = 'Please enter a valid email';
                setTimeout(() => {
                    ctaEmail.style.borderColor = '';
                    ctaEmail.placeholder = 'Enter your work email';
                }, 2000);
            }
        });
    }

    // ── Active nav link on scroll ──
    const sections = document.querySelectorAll('section[id]');

    const updateActiveLink = () => {
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    link.style.color = 'var(--text-primary)';
                } else {
                    link.style.color = '';
                }
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });

    // ── Parallax effect on orbs ──
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        document.querySelectorAll('.gradient-orb').forEach((orb, i) => {
            const speed = (i + 1) * 15;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

});
