// Dados de pH dos Alimentos - baseado em pHesaude.txt

const phData = {
    extremamenteAlcalinos: [
        { name: "Agar-agar", ph: "extreme-alkaline" },
        { name: "Limão", ph: "extreme-alkaline" },
        { name: "Melão", ph: "extreme-alkaline" },
        { name: "Melancia", ph: "extreme-alkaline" },
        { name: "Aipo", ph: "extreme-alkaline" },
        { name: "Tâmaras", ph: "extreme-alkaline" },
        { name: "Figos", ph: "extreme-alkaline" },
        { name: "Algas marinhas", ph: "extreme-alkaline" },
        { name: "Manga", ph: "extreme-alkaline" },
        { name: "Mamão", ph: "extreme-alkaline" },
        { name: "Salsa", ph: "extreme-alkaline" },
        { name: "Uvas sem sementes", ph: "extreme-alkaline" },
        { name: "Agrião", ph: "extreme-alkaline" },
        { name: "Aspargos", ph: "extreme-alkaline" },
        { name: "Maracujá", ph: "extreme-alkaline" },
        { name: "Pera", ph: "extreme-alkaline" },
        { name: "Abacaxi", ph: "extreme-alkaline" },
        { name: "Passas", ph: "extreme-alkaline" },
        { name: "Ameixas", ph: "extreme-alkaline" },
        { name: "Kiwis", ph: "extreme-alkaline" }
    ],

    moderadamenteAlcalinos: [
        { name: "Maçã", ph: "moderate-alkaline" },
        { name: "Brotos de alfafa", ph: "moderate-alkaline" },
        { name: "Damascos", ph: "moderate-alkaline" },
        { name: "Banana", ph: "moderate-alkaline" },
        { name: "Toranja", ph: "moderate-alkaline" },
        { name: "Alho", ph: "moderate-alkaline" },
        { name: "Uvas menos doces", ph: "moderate-alkaline" },
        { name: "Goiaba", ph: "moderate-alkaline" },
        { name: "Ervas verdes", ph: "moderate-alkaline" },
        { name: "Alface", ph: "moderate-alkaline" },
        { name: "Nectarinas", ph: "moderate-alkaline" },
        { name: "Pêssegos", ph: "moderate-alkaline" },
        { name: "Ervilha fresca", ph: "moderate-alkaline" },
        { name: "Abóbora", ph: "moderate-alkaline" },
        { name: "Sal marinho", ph: "moderate-alkaline" },
        { name: "Beterraba", ph: "moderate-alkaline" },
        { name: "Pimentão", ph: "moderate-alkaline" },
        { name: "Brócolis", ph: "moderate-alkaline" },
        { name: "Repolho", ph: "moderate-alkaline" },
        { name: "Couve-flor", ph: "moderate-alkaline" },
        { name: "Gengibre fresco", ph: "moderate-alkaline" },
        { name: "Laranjas", ph: "moderate-alkaline" },
        { name: "Framboesa", ph: "moderate-alkaline" },
        { name: "Morango", ph: "moderate-alkaline" },
        { name: "Nabo", ph: "moderate-alkaline" }
    ],

    levementeAlcalinos: [
        { name: "Amêndoas", ph: "light-alkaline" },
        { name: "Alcachofras", ph: "light-alkaline" },
        { name: "Couve-de-bruxelas", ph: "light-alkaline" },
        { name: "Cerejas", ph: "light-alkaline" },
        { name: "Coco fresco", ph: "light-alkaline" },
        { name: "Pepino", ph: "light-alkaline" },
        { name: "Berinjela", ph: "light-alkaline" },
        { name: "Mel", ph: "light-alkaline" },
        { name: "Alho-poró", ph: "light-alkaline" },
        { name: "Cogumelos", ph: "light-alkaline" },
        { name: "Quiabo", ph: "light-alkaline" },
        { name: "Cebola", ph: "light-alkaline" },
        { name: "Picles caseiro", ph: "light-alkaline" },
        { name: "Rabanetes", ph: "light-alkaline" },
        { name: "Castanhas torradas", ph: "light-alkaline" },
        { name: "Leite de cabra", ph: "light-alkaline" },
        { name: "Óleo de oliva", ph: "light-alkaline" },
        { name: "Sementes de gergelim", ph: "light-alkaline" },
        { name: "Queijo de soja", ph: "light-alkaline" },
        { name: "Leite de soja", ph: "light-alkaline" },
        { name: "Grãos germinados", ph: "light-alkaline" },
        { name: "Tofu", ph: "light-alkaline" }
    ],

    neutros: [
        { name: "Manteiga fresca sem sal", ph: "neutral" },
        { name: "Margarina", ph: "neutral" },
        { name: "Óleos", ph: "neutral" },
        { name: "Iogurte simples", ph: "neutral" }
    ],

    moderadamenteAcidos: [
        { name: "Bananas verdes", ph: "moderate-acid" },
        { name: "Cevada", ph: "moderate-acid" },
        { name: "Farelo", ph: "moderate-acid" },
        { name: "Manteiga", ph: "moderate-acid" },
        { name: "Cereais não refinados", ph: "moderate-acid" },
        { name: "Queijos", ph: "moderate-acid" },
        { name: "Biscoitos de centeio", ph: "moderate-acid" },
        { name: "Ovos inteiros cozidos", ph: "moderate-acid" },
        { name: "Frutose", ph: "moderate-acid" },
        { name: "Mel pasteurizado", ph: "moderate-acid" },
        { name: "Ketchup", ph: "moderate-acid" },
        { name: "Leite homogeneizado", ph: "moderate-acid" },
        { name: "Pipocas com sal/manteiga", ph: "moderate-acid" },
        { name: "Molho de soja", ph: "moderate-acid" }
    ],

    extremamenteAcidos: [
        { name: "Adoçantes artificiais", ph: "extreme-acid" },
        { name: "Café", ph: "extreme-acid" },
        { name: "Carne vermelha", ph: "extreme-acid" },
        { name: "Cerveja", ph: "extreme-acid" },
        { name: "Vinho", ph: "extreme-acid" },
        { name: "Pães de farinha branca", ph: "extreme-acid" },
        { name: "Açúcar", ph: "extreme-acid" },
        { name: "Refrigerantes", ph: "extreme-acid" },
        { name: "Chocolate", ph: "extreme-acid" },
        { name: "Cigarros", ph: "extreme-acid" },
        { name: "Medicamentos", ph: "extreme-acid" },
        { name: "Peixes", ph: "extreme-acid" },
        { name: "Farinha de trigo branca", ph: "extreme-acid" },
        { name: "Sucos de fruta com açúcar", ph: "extreme-acid" },
        { name: "Doces", ph: "extreme-acid" },
        { name: "Carne de cordeiro", ph: "extreme-acid" },
        { name: "Licor", ph: "extreme-acid" },
        { name: "Melaços", ph: "extreme-acid" },
        { name: "Macarrão branco", ph: "extreme-acid" },
        { name: "Bolos de farinha branca", ph: "extreme-acid" },
        { name: "Picles comercial", ph: "extreme-acid" },
        { name: "Carne de porco", ph: "extreme-acid" },
        { name: "Aves", ph: "extreme-acid" },
        { name: "Frutos do mar", ph: "extreme-acid" },
        { name: "Sal de mesa", ph: "extreme-acid" },
        { name: "Chá preto", ph: "extreme-acid" },
        { name: "Vinagre branco", ph: "extreme-acid" },
        { name: "Glutamato monossódico", ph: "extreme-acid" }
    ]
};

// Informações sobre equilíbrio de pH
const phInfo = {
    idealRange: "7.35 - 7.45",
    stomachPh: "1",
    venousBloodPh: "7.35",
    arterialBloodPh: "7.4",

    healthIssues: [
        "Artrose",
        "Fadiga",
        "Diabetes",
        "Reumatismo",
        "Úlceras",
        "Hipertensão arterial",
        "Osteoporose",
        "Problemas cardiovasculares",
        "Insônia",
        "Retenção hídrica",
        "Enxaquecas",
        "Prisão de ventre"
    ],

    recommendations: {
        maintain: {
            alkaline: 60,
            acidic: 40,
            description: "Para manter a saúde"
        },
        restore: {
            alkaline: 80,
            acidic: 20,
            description: "Para restaurar a saúde"
        }
    }
};

// Função para buscar alimentos por pH
function searchByPH(query) {
    const results = [];
    const lowerQuery = query.toLowerCase();

    Object.entries(phData).forEach(([category, foods]) => {
        foods.forEach(food => {
            if (food.name.toLowerCase().includes(lowerQuery)) {
                results.push({
                    ...food,
                    category: category
                });
            }
        });
    });

    return results;
}

// Função para calcular proporção de pH de uma refeição
function calculatePhBalance(foods) {
    let alkalineCount = 0;
    let acidicCount = 0;
    let neutralCount = 0;

    foods.forEach(food => {
        const phType = food.ph;
        if (phType.includes('alkaline')) {
            alkalineCount++;
        } else if (phType.includes('acid')) {
            acidicCount++;
        } else {
            neutralCount++;
        }
    });

    const total = alkalineCount + acidicCount + neutralCount;

    if (total === 0) return null;

    const alkalinePercent = Math.round((alkalineCount / total) * 100);
    const acidicPercent = Math.round((acidicCount / total) * 100);

    return {
        alkalinePercent,
        acidicPercent,
        neutralCount,
        total,
        recommendation: getPhRecommendation(alkalinePercent, acidicPercent)
    };
}

// Função para obter recomendação baseada na proporção
function getPhRecommendation(alkalinePercent, acidicPercent) {
    if (alkalinePercent >= 80) {
        return {
            status: "excellent",
            message: "✅ Excelente! Ideal para restaurar a saúde.",
            color: "success"
        };
    } else if (alkalinePercent >= 60) {
        return {
            status: "good",
            message: "✅ Muito bom! Ideal para manter a saúde.",
            color: "success"
        };
    } else if (alkalinePercent >= 40) {
        return {
            status: "fair",
            message: "⚠️ Regular. Tente aumentar alimentos alcalinos.",
            color: "warning"
        };
    } else {
        return {
            status: "poor",
            message: "🛑 Atenção! Muitos alimentos ácidos. Rebalanceie sua refeição.",
            color: "danger"
        };
    }
}

// Função para obter cor do badge por tipo de pH
function getPhBadgeInfo(phType) {
    const badges = {
        "extreme-alkaline": { color: "green", label: "Extremamente Alcalino", icon: "✨" },
        "moderate-alkaline": { color: "green", label: "Moderadamente Alcalino", icon: "✓" },
        "light-alkaline": { color: "blue", label: "Levemente Alcalino", icon: "•" },
        "neutral": { color: "yellow", label: "Neutro", icon: "○" },
        "moderate-acid": { color: "yellow", label: "Moderadamente Ácido", icon: "⚠" },
        "extreme-acid": { color: "red", label: "Extremamente Ácido", icon: "✕" }
    };
    return badges[phType] || badges["neutral"];
}

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        phData,
        phInfo,
        searchByPH,
        calculatePhBalance,
        getPhRecommendation,
        getPhBadgeInfo
    };
}
