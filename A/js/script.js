window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

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

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    if (!nom || !email) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    this.reset();
});

function openModal(imageSrc, title) {
    const modal = document.getElementById("galerieModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("galerieModal");
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById("galerieModal");
    if (event.target === modal) {
        closeModal();
    }
};
