// Configuration des pages
const pages = {
    accueil: {
        title: 'Accueil',
        sections: [
            { title: 'Présentation', content: 'Bienvenue sur la plateforme ABGP, votre partenaire de confiance pour des solutions innovantes et performantes.' },
            { title: 'Atouts et Valeurs', content: 'Notre engagement envers l\'excellence, l\'innovation et la satisfaction client.' },
            { title: 'Réalisations', content: 'Découvrez nos projets et succès à travers nos différentes activités.' },
            { title: 'Partenaires', content: 'Nous collaborons avec des partenaires de confiance pour vous offrir le meilleur service.' },
            { title: 'Contacts', content: 'Contactez-nous pour plus d\'informations sur nos services.' }
        ]
    },
    tabim: {
        title: 'TABIMM',
        sections: [
            { title: 'Présentation', content: 'TABIMM est spécialisé dans la gestion de projets innovants.' },
            { title: 'Activités', content: 'Nos principales activités incluent...' },
            { title: 'Réalisations', content: 'Découvrez nos réalisations marquantes...' },
            { title: 'Prestations', content: 'Nos services sur mesure pour répondre à vos besoins...' },
            { title: 'Comptes', content: 'Gestion des comptes clients, managers, équipes et stagiaires...' }
        ]
    },
    sdm: {
        title: 'SDM',
        sections: [
            { title: 'Présentation', content: 'SDM est dédié à...' },
            { title: 'Activités', content: 'Nos domaines d\'intervention...' },
            { title: 'Réalisations', content: 'Nos succès et références...' },
            { title: 'Prestations', content: 'Nos offres de services...' },
            { title: 'Comptes', content: 'Gestion des accès...' }
        ]
    },
    hrrm: {
        title: 'HRRM',
        sections: [
            { title: 'Présentation', content: 'Gestion des ressources humaines et recrutement...' },
            { title: 'Activités', content: 'Nos services RH...' },
            { title: 'Réalisations', content: 'Nos succès en recrutement...' },
            { title: 'Prestations', content: 'Nos solutions RH...' },
            { title: 'Comptes', content: 'Espace personnel...' }
        ]
    },
    tlm: {
        title: 'TLM',
        sections: [
            { title: 'Présentation', content: 'Formations et apprentissage en ligne...' },
            { title: 'Activités', content: 'Nos programmes de formation...' },
            { title: 'Réalisations', content: 'Témoignages et succès...' },
            { title: 'Prestations', content: 'Nos formations disponibles...' },
            { title: 'Comptes', content: 'Espace apprenant...' }
        ]
    },
    lbc: {
        title: 'LBC',
        sections: [
            { title: 'Présentation', content: 'LBC en quelques mots...' },
            { title: 'Activités', content: 'Nos domaines d\'expertise...' },
            { title: 'Réalisations', content: 'Nos projets marquants...' },
            { title: 'Prestations', content: 'Nos services...' },
            { title: 'Comptes', content: 'Espace client...' }
        ]
    },
    rem: {
        title: 'REM',
        sections: [
            { title: 'Présentation', content: 'REM en détail...' },
            { title: 'Activités', content: 'Ce que nous faisons...' },
            { title: 'Réalisations', content: 'Nos succès...' },
            { title: 'Prestations', content: 'Nos offres...' },
            { title: 'Comptes', content: 'Accès personnalisé...' }
        ]
    },
    sbdq: {
        title: 'SBDQ',
        sections: [
            { title: 'Présentation', content: 'Découvrez SBDQ...' },
            { title: 'Activités', content: 'Nos interventions...' },
            { title: 'Réalisations', content: 'Nos références...' },
            { title: 'Prestations', content: 'Nos services...' },
            { title: 'Comptes', content: 'Espace membre...' }
        ]
    },
    finance: {
        title: 'Finance',
        sections: [
            { title: 'Tableau de bord', content: 'Vue d\'ensemble financier...' },
            { title: 'Transactions', content: 'Gestion des transactions...' },
            { title: 'Facturation', content: 'Émission et suivi des factures...' },
            { title: 'Rapports', content: 'Rapports financiers...' },
            { title: 'Administration', content: 'Gestion administrative...' }
        ]
    },
    gouvernance: {
        title: 'Gouvernance',
        sections: [
            { title: 'Tableau de bord', content: 'Vue d\'ensemble de la gouvernance...' },
            { title: 'Managers', content: 'Activités des managers...' },
            { title: 'Tâches', content: 'Assignation et suivi des tâches...' },
            { title: 'Documents', content: 'Gestion documentaire...' },
            { title: 'Rapports', content: 'Rapports de gouvernance...' }
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
        sectionContent.innerHTML = `<p>${section.content}</p>`;
        
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

// Charger la page d'accueil
function loadHomePage(container) {
    container.innerHTML = `
        <div class="home">
            <h1>Bienvenue sur la plateforme ABGP</h1>
            <p>Découvrez nos services et solutions innovantes</p>
            <div class="cta-buttons">
                <a href="#tabim" class="button primary">Découvrir TABIMM</a>
                <a href="#tlm" class="button secondary">En savoir plus sur TLM</a>
            </div>
        </div>
    `;
    
    // Ajouter les gestionnaires d'événements aux boutons
    setupHomeButtons();
}

// Charger la page TABIMM
function loadTabimPage(container) {
    container.innerHTML = `
        <div class="page">
            <h1>TABIMM</h1>
            <p>Gestion de projets et solutions innovantes</p>
            <div class="cta-buttons">
                <a href="#" class="button primary back-button">Retour à l'accueil</a>
            </div>
        </div>
    `;
    
    // Ajouter le gestionnaire d'événements pour le bouton de retour
    setupBackButton();
}

// Charger la page TLM
function loadTlmPage(container) {
    container.innerHTML = `
        <div class="page">
            <h1>TLM</h1>
            <p>Formations et apprentissage en ligne</p>
            <div class="cta-buttons">
                <a href="#" class="button primary back-button">Retour à l'accueil</a>
            </div>
        </div>
    `;
    
    // Ajouter le gestionnaire d'événements pour le bouton de retour
    setupBackButton();
}

// Charger la page HRRM
function loadHrrmPage(container) {
    container.innerHTML = `
        <div class="page">
            <h1>HRRM</h1>
            <p>Gestion des ressources humaines et recrutement</p>
            <div class="cta-buttons">
                <a href="#" class="button primary back-button">Retour à l'accueil</a>
            </div>
        </div>
    `;
    
    // Ajouter le gestionnaire d'événements pour le bouton de retour
    setupBackButton();
}

// Charger la page SBDQ
function loadSbdqPage(container) {
    container.innerHTML = `
        <div class="page">
            <h1>SBDQ</h1>
            <p>Solutions et services personnalisés</p>
            <div class="cta-buttons">
                <a href="#" class="button primary back-button">Retour à l'accueil</a>
            </div>
        </div>
    `;
    
    // Ajouter le gestionnaire d'événements pour le bouton de retour
    setupBackButton();
}

// Configurer les boutons de la page d'accueil
function setupHomeButtons() {
    const buttons = document.querySelectorAll('.home .button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href').substring(1);
            loadPage(page);
            window.history.pushState({}, '', `#${page}`);
        });
    });
}

// Configurer le bouton de retour
function setupBackButton() {
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            loadPage('home');
            window.history.pushState({}, '', '#');
        });
    }
}
