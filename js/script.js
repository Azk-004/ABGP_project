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

// Script pour le diagramme des valeurs
document.addEventListener('DOMContentLoaded', function() {
    const values = [
        { icon: 'fas fa-trophy', title: 'Excellence' },
        { icon: 'fas fa-heart', title: 'Passion' },
        { icon: 'fas fa-users', title: 'Collaboration' },
        { icon: 'fas fa-handshake', title: 'Respect' },
        { icon: 'fas fa-chart-line', title: 'Progrès' }
    ];

    const diagram = document.getElementById('diagram');
    if (diagram) {
        function positionValues() {
            // Supprimer les éléments existants
            const existingBlocks = diagram.querySelectorAll('.value-block, .connecting-line');
            existingBlocks.forEach(block => block.remove());

            // Dimensions du conteneur
            const centerX = diagram.offsetWidth / 2;
            const centerY = diagram.offsetHeight / 2;
            const radius = Math.min(centerX, centerY) * 0.85;
            const blockSize = 200;
            const blockRadius = blockSize / 2;

            // Positionner chaque bloc et sa ligne
            values.forEach((value, index) => {
                const angle = (index * (2 * Math.PI / values.length)) - Math.PI / 2;

                // Coordonnées du centre du bloc
                const blockX = centerX + radius * Math.cos(angle);
                const blockY = centerY + radius * Math.sin(angle);

                // Créer le bloc de valeur
                const valueBlock = document.createElement('div');
                valueBlock.className = 'value-block';
                valueBlock.style.width = `${blockSize}px`;
                valueBlock.style.height = `${blockSize}px`;
                valueBlock.style.left = `${blockX - blockRadius}px`;
                valueBlock.style.top = `${blockY - blockRadius}px`;
                valueBlock.style.animationDelay = `${index * 150 + Math.random() * 100}ms`;
                valueBlock.innerHTML = `
                    <div class="value-icon"><i class="${value.icon}"></i></div>
                    <h3 class="value-title">${value.title}</h3>
                `;
                diagram.appendChild(valueBlock);

                // Créer la ligne de connexion
                const line = document.createElement('div');
                line.className = 'connecting-line';
                const lineLength = Math.sqrt(Math.pow(blockX - centerX, 2) + Math.pow(blockY - centerY, 2)) - 10;
                line.style.width = `${lineLength}px`;
                line.style.transform = `rotate(${Math.atan2(blockY - centerY, blockX - centerX)}rad)`;
                line.style.left = `${centerX}px`;
                line.style.top = `${centerY}px`;
                line.style.animationDelay = `${index * 150 + 100}ms`;
                diagram.appendChild(line);

                // Animation d'apparition
                setTimeout(() => {
                    valueBlock.classList.add('active');
                    line.classList.add('active');
                }, index * 100);
            });
        }

        // Positionner les blocs au chargement
        positionValues();

        // Repositionner en cas de redimensionnement
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(positionValues, 250);
        });
    }
});
