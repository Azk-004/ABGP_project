// navigation.js
class DepartmentNavigation {
    constructor() {
        this.currentDept = this.getCurrentDepartment();
        this.initNavigation();
    }
    
    getCurrentDepartment() {
        // Détermine le département actuel basé sur l'URL
        const path = window.location.pathname;
        return departments.find(dept => path.includes(dept.id));
    }
    
    initNavigation() {
        if (!this.currentDept) return;
        
        // Mettre à jour les liens des flèches
        const prevArrow = document.querySelector('.prev-arrow');
        const nextArrow = document.querySelector('.next-arrow');
        
        if (prevArrow) {
            const prevDept = departments.find(d => d.id === this.currentDept.prev);
            prevArrow.href = prevDept ? prevDept.path : '#';
        }
        
        if (nextArrow) {
            const nextDept = departments.find(d => d.id === this.currentDept.next);
            nextArrow.href = nextDept ? nextDept.path : '#';
        }
    }
}
