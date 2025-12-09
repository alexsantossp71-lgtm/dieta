// DiEtA - Script Principal
// Webapp de Planejamento Nutricional

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    loadDashboardData();
    setupMobileMenu();
    setupDailyTips();
});

// ============================================
// CONFIGURAÇÃO INICIAL
// ============================================
function initializeApp() {
    // Inicializar LocalStorage se necessário
    if (!localStorage.getItem('dieta_initialized')) {
        const initialData = {
            waterGoal: 2000, // ml
            caloriesGoal: 2000, // kcal
            mealsGoal: 6,
            dailyLog: {},
            settings: {
                theme: 'dark',
                notifications: true
            }
        };

        Object.keys(initialData).forEach(key => {
            if (!localStorage.getItem(`dieta_${key}`)) {
                localStorage.setItem(`dieta_${key}`, JSON.stringify(initialData[key]));
            }
        });

        localStorage.setItem('dieta_initialized', 'true');
    }
}

// ============================================
// DASHBOARD DATA
// ============================================
function loadDashboardData() {
    const today = new Date().toISOString().split('T')[0];
    const dailyLog = JSON.parse(localStorage.getItem('dieta_dailyLog') || '{}');
    const todayLog = dailyLog[today] || {
        water: 0,
        calories: 0,
        meals: []
    };

    // Goals
    const waterGoal = parseInt(localStorage.getItem('dieta_waterGoal') || '2000');
    const caloriesGoal = parseInt(localStorage.getItem('dieta_caloriesGoal') || '2000');
    const mealsGoal = parseInt(localStorage.getItem('dieta_mealsGoal') || '6');

    // Update Water
    const waterPercent = Math.min(Math.round((todayLog.water / waterGoal) * 100), 100);
    updateElement('waterIntake', `${todayLog.water} / ${waterGoal}ml`);
    updateElement('waterBadge', `${waterPercent}%`);
    updateElement('waterProgress', null, { width: `${waterPercent}%` });

    // Update Calories
    const caloriesPercent = Math.min(Math.round((todayLog.calories / caloriesGoal) * 100), 100);
    updateElement('caloriesCount', `${todayLog.calories} / ${caloriesGoal} kcal`);
    updateElement('caloriesBadge', `${caloriesPercent}%`);
    updateElement('caloriesProgress', null, { width: `${caloriesPercent}%` });

    // Update Meals
    const mealsCount = todayLog.meals.length;
    updateElement('mealsBadge', `${mealsCount}/${mealsGoal}`);
    updateElement('mealsCount', mealsCount > 0 ? `${mealsCount} registrada${mealsCount > 1 ? 's' : ''}` : 'Nenhuma registrada');
}

// ============================================
// MOBILE MENU
// ============================================
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// ============================================
// DAILY TIPS
// ============================================
function setupDailyTips() {
    const tips = [
        "Para manter a saúde, uma dieta deve conter 60% de alimentos alcalinos e 40% de alimentos ácidos. Para restaurar a saúde, a proporção ideal é 80% alcalinos e 20% ácidos.",
        "Beba 1 copo de água (200ml) a cada 20 minutos de atividade física para garantir uma hidratação correta.",
        "Uma alimentação correta e saudável deve incluir pelo menos um alimento de cada grupo (energéticos, reguladores e construtores) por refeição.",
        "A má qualidade de sono atrapalha a produção de hormônios reguladores do apetite, aumentando a leptina (fome) e reduzindo a grelina (saciedade).",
        "Exponha-se ao sol pelo menos 20 minutos diariamente para garantir a produção de vitamina D, essencial para prevenir o ganho de peso.",
        "100ml de água perdidas na forma de suor produzem um resfriamento de 1,6 graus na temperatura corporal e representam -58 calorias.",
        "O ideal é realizar várias refeições diárias, com intervalo entre 3 e 4 horas no máximo, e em pequenos volumes.",
        "Alimentos extremamente alcalinos incluem: limão, melão, melancia, mamão, manga, algas marinhas e aspargos.",
        "Prefira sempre massas integrais em pequenas quantidades, associadas a proteínas magras (peito de frango, peixes, queijos magros).",
        "Suas necessidades diárias de água estão estimadas em torno de 1 litro para cada 1000 calorias ingeridas.",
        "De cada 4g de músculo, 3g são de água, portanto, para manter ou aumentar sua massa muscular a hidratação é fundamental.",
        "Manter o equilíbrio do pH significa regular a concentração de íons de hidrogênio nos fluidos do nosso corpo. O pH ideal é entre 7,35 e 7,45."
    ];

    const tipElement = document.getElementById('dailyTip');
    if (tipElement) {
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const tipIndex = dayOfYear % tips.length;
        tipElement.textContent = `"${tips[tipIndex]}"`;
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function updateElement(id, text = null, styles = null) {
    const element = document.getElementById(id);
    if (element) {
        if (text !== null) {
            element.textContent = text;
        }
        if (styles) {
            Object.assign(element.style, styles);
        }
    }
}

function getTodayKey() {
    return new Date().toISOString().split('T')[0];
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(`dieta_${key}`, JSON.stringify(value));
}

function getFromLocalStorage(key, defaultValue = null) {
    const value = localStorage.getItem(`dieta_${key}`);
    return value ? JSON.parse(value) : defaultValue;
}

// ============================================
// WATER TRACKER FUNCTIONS
// ============================================
function addWater(amount) {
    const today = getTodayKey();
    const dailyLog = getFromLocalStorage('dailyLog', {});

    if (!dailyLog[today]) {
        dailyLog[today] = { water: 0, calories: 0, meals: [] };
    }

    dailyLog[today].water += amount;
    saveToLocalStorage('dailyLog', dailyLog);
    loadDashboardData();
}

// ============================================
// MEAL TRACKER FUNCTIONS
// ============================================
function addMeal(mealData) {
    const today = getTodayKey();
    const dailyLog = getFromLocalStorage('dailyLog', {});

    if (!dailyLog[today]) {
        dailyLog[today] = { water: 0, calories: 0, meals: [] };
    }

    dailyLog[today].meals.push({
        time: new Date().toISOString(),
        ...mealData
    });

    // Update total calories
    dailyLog[today].calories += mealData.calories || 0;

    saveToLocalStorage('dailyLog', dailyLog);
    loadDashboardData();
}

// ============================================
// FORMAT FUNCTIONS
// ============================================
function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
}

function formatTime(date) {
    return new Date(date).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatCalories(calories) {
    return `${Math.round(calories)} kcal`;
}

// ============================================
// EXPORT FUNCTIONS (for use in other pages)
// ============================================
window.DiEtA = {
    // Storage
    save: saveToLocalStorage,
    load: getFromLocalStorage,

    // Trackers
    addWater,
    addMeal,

    // Utilities
    getTodayKey,
    formatDate,
    formatTime,
    formatCalories,

    // Data refresh
    refreshDashboard: loadDashboardData
};

console.log('✅ DiEtA App initialized successfully!');
