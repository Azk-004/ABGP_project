document.addEventListener('DOMContentLoaded', function() {
    // ========== MENU MOBILE ==========
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    // ========== ANIMATION TIMELINE SERVICES ==========
    const serviceNodes = document.querySelectorAll('.service-node');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    serviceNodes.forEach(node => observer.observe(node));

    // ========== CAROUSEL PARTENAIRES ==========
    const carouselTrack = document.getElementById('carouselTrack');
    const partners = [
        { name: "Partenaire 1", logo: "images/partners/partner1.jpg" },
        { name: "Partenaire 2", logo: "images/partners/partner2.jpg" },
        { name: "Partenaire 3", logo: "images/partners/partner3.jpg" },
        { name: "Partenaire 4", logo: "images/partners/partner4.jpg" },
        { name: "Partenaire 5", logo: "images/partners/partner5.jpg" },
        { name: "Partenaire 6", logo: "images/partners/partner6.jpg" }
    ];

    // Générer les logos partenaires
    partners.forEach(partner => {
        const logoDiv = document.createElement('div');
        logoDiv.className = 'partner-logo';
        logoDiv.innerHTML = `<img src="${partner.logo}" alt="${partner.name}" loading="lazy">`;
        carouselTrack.appendChild(logoDiv);
    });

    // Configuration du carrousel
    let currentPosition = 0;
    const logoWidth = 150; // Largeur d'un logo
    const gap = 40; // Espacement entre les logos
    const logosPerView = calculateLogosPerView();

    function calculateLogosPerView() {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 768) return 3;
        if (window.innerWidth >= 480) return 2;
        return 1;
    }

    function updateCarousel() {
        const maxPosition = (partners.length - logosPerView) * (logoWidth + gap);
        if (currentPosition < 0) currentPosition = 0;
        if (currentPosition > maxPosition) currentPosition = maxPosition;

        carouselTrack.style.transform = `translateX(-${currentPosition}px)`;
    }

    // Navigation du carrousel
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.addEventListener('click', () => {
        currentPosition -= (logoWidth + gap);
        updateCarousel();
    });

    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.addEventListener('click', () => {
        currentPosition += (logoWidth + gap);
        updateCarousel();
    });

    const carouselNav = document.createElement('div');
    carouselNav.className = 'carousel-nav';
    carouselNav.appendChild(prevBtn);
    carouselNav.appendChild(nextBtn);

    document.querySelector('.partners-carousel').appendChild(carouselNav);

    // Auto-play du carrousel
    let autoPlay = setInterval(() => {
        currentPosition += (logoWidth + gap);
        updateCarousel();
    }, 3000);

    // Pause au survol
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(autoPlay);
    });

    carouselTrack.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => {
            currentPosition += (logoWidth + gap);
            updateCarousel();
        }, 3000);
    });

    // Gestion du redimensionnement
    window.addEventListener('resize', () => {
        const newLogosPerView = calculateLogosPerView();
        if (newLogosPerView !== logosPerView) {
            logosPerView = newLogosPerView;
            currentPosition = 0;
            updateCarousel();
        }
    });

    // ========== SCROLL EFFETS ==========
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
