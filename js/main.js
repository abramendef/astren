// Main JavaScript file for Astren website

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    setCurrentYear();
    
    // Setup smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Setup scroll animations
    setupScrollAnimations();
});

/**
 * Set the current year in the footer dynamically
 */
function setCurrentYear() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
}

/**
 * Setup smooth scrolling for internal anchor links
 */
function setupSmoothScrolling() {
    // Get all links that start with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" (empty anchor)
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate offset to account for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerHeight - 20; // Extra 20px padding
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Setup scroll animations using Intersection Observer
 */
function setupScrollAnimations() {
    // Allow override for testing (can be removed later)
    const allowMotion = document.documentElement.dataset.allowMotion === 'true';
    if (!allowMotion && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element enters viewport
                entry.target.classList.add('animate-in');
                
                // Handle staggered animations
                if (entry.target.classList.contains('animate-stagger')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        child.style.setProperty('--stagger-delay', `${index * 0.1}s`);
                        child.classList.add('animate-in');
                    });
                }
            }
        });
    }, {
        // Trigger when 10% of the element is visible
        threshold: 0.1,
        // Start animation slightly before element comes into view
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all elements with animation classes
    const animateElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-fade, .animate-slide-left, .animate-slide-right, .animate-scale, .animate-stagger'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Optional: Add scroll effect to header (can be uncommented if needed)
 */
function addHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down & past 100px
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}