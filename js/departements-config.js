// departments-config.js
const departments = [
    {
        id: 'hrrm',
        name: 'Human Resource and Recruitment Management',
        path: 'departements/hrrm.html',
        prev: 'tlm', // dernier département
        next: 'lbc'  // département suivant
    },
    {
        id: 'lbc', 
        name: 'Life and Business Coaching',
        path: 'departements/lbc.html',
        prev: 'hrrm',
        next: 'rem'
    },
    {
        id: 'rem',
        name: 'Real Estate Management', 
        path: 'departements/rem.html',
        prev: 'lbc',
        next: 'sbqd'
    },
    {
        id: 'sbqd',
        name: 'Sustainable Building Quarries and Drone',
        path: 'departements/sbqd.html', 
        prev: 'rem',
        next: 'tabimm'
    },
    {
        id: 'tabimm',
        name: 'Technical Assistance and BIM Management',
        path: 'departements/tabimm.html',
        prev: 'sbqd', 
        next: 'tlm'
    },
    {
        id: 'tlm',
        name: 'Training and Learning Management',
        path: 'departements/tlm.html',
        prev: 'tabimm',
        next: 'hrrm' // boucle vers le premier
    }
];
