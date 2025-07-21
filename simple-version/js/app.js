// Configuration des pages
const pages = {
    accueil: {
        title: 'Accueil',
        sections: [
            { title: 'Présentation', content: '<p>Bienvenue sur la plateforme ABGP, votre partenaire de confiance pour des solutions innovantes et performantes.</p>' },
            { title: 'Atouts et Valeurs', content: '<p>Notre engagement envers l\'excellence, l\'innovation et la satisfaction client.</p>' },
            { title: 'Réalisations', content: '<p>Découvrez nos projets et succès à travers nos différentes activités.</p>' },
            { title: 'Partenaires', content: '<p>Nous collaborons avec des partenaires de confiance pour vous offrir le meilleur service.</p>' },
            { title: 'Contacts', content: '<p>Contactez-nous pour plus d\'informations sur nos services.</p>' }
        ]
    }
};

// Gestionnaire d'événements pour le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour l'année du copyright
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Gestion de la navigation
    setupNavigation();

    // Gestion du menu mobile
    setupMobileMenu();

    // Charger la page en fonction de l'URL
    const page = window.location.hash.substring(1) || 'accueil';
    loadPage(page);

    // Gérer les changements d'URL (pour le bouton précédent/suivant du navigateur)
    window.addEventListener('popstate', function() {
        const page = window.location.hash.substring(1) || 'accueil';
        loadPage(page);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour l'année du copyright
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Gestion du zoom avec le clavier
    document.addEventListener('keydown', function(event) {
        const content = document.getElementById('content');
        if (event.key === '+') {
            content.style.transform = 'scale(1.2)';
        } else if (event.key === '-') {
            content.style.transform = 'scale(1)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour l'année du copyright
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Fonction pour basculer l'affichage du contenu
function toggleContent(element) {
    element.classList.toggle('active');
}

// Configuration de la navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href').substring(1);
            loadPage(page);
            // Mettre à jour l'URL sans recharger la page
            window.history.pushState({}, '', `#${page}`);
            // Fermer le menu mobile si ouvert
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
}

// Configuration du menu mobile
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Fermer le menu quand on clique à l'extérieur
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// Charger le contenu de la page
function loadPage(pageId) {
    const content = document.getElementById('content');

    // Vérifier si la page existe
    if (!pages[pageId]) {
        pageId = 'accueil'; // Page par défaut si l'ID n'existe pas
    }

    const page = pages[pageId];

    // Mettre à jour le titre de la page
    document.title = `${page.title} | ABGP`;

    // Effacer le contenu actuel
    content.innerHTML = '';

    // Créer le contenu de la page
    const pageElement = document.createElement('div');
    pageElement.className = 'page';

    // Ajouter le titre de la page
    const titleElement = document.createElement('h1');
    titleElement.textContent = page.title;
    pageElement.appendChild(titleElement);

    // Ajouter les sections de la page
    const sectionsContainer = document.createElement('div');
    sectionsContainer.className = 'page-sections';

    page.sections.forEach((section, index) => {
        const sectionElement = document.createElement('section');
        sectionElement.id = `section-${pageId}-${index}`;
        sectionElement.className = 'page-section';

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;

        const sectionContent = document.createElement('div');
        sectionContent.className = 'section-content';
        sectionContent.innerHTML = section.content;

        sectionElement.appendChild(sectionTitle);
        sectionElement.appendChild(sectionContent);
        sectionsContainer.appendChild(sectionElement);
    });

    pageElement.appendChild(sectionsContainer);

    // Ajouter un bouton de retour pour les pages autres que l'accueil
    if (pageId !== 'accueil') {
        const backButton = document.createElement('div');
        backButton.className = 'cta-buttons back-button-container';
        backButton.innerHTML = `
            <a href="#accueil" class="button back-button">
                <i class="fas fa-arrow-left"></i> Retour à l'accueil
            </a>
        `;
        pageElement.insertBefore(backButton, pageElement.firstChild);
    }

    content.appendChild(pageElement);

    // Mettre à jour la classe active sur les liens de navigation
    updateActiveNavLink(pageId);

    // Faire défiler vers le haut de la page
    window.scrollTo(0, 0);
}

// Mettre à jour le lien de navigation actif
function updateActiveNavLink(activePage) {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').substring(1);
        if (linkPage === activePage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
