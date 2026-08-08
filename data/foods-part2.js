/*
  DiEtA - Base de Dados Unificada de Alimentos - Parte 2
  Frutas e Hortaliças (dados consistentes com portions.js, glycemic.js e ph.js)
  Estrutura: nome, porção, calorias, índice glicêmico, pH, categoria
*/

const foodDatabasePart2 = [
    // ============================================
    // FRUTAS
    // ============================================
    {
        "id": 51,
        "nome": "Banana",
        "porcao": "1 unidade média",
        "calorias": 90,
        "ig": "médio",
        "ph": "alcalino-moderado",
        "categoria": "frutas"
    },
    {
        "id": 52,
        "nome": "Maçã",
        "porcao": "1 unidade média",
        "calorias": 90,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "frutas"
    },
    {
        "id": 53,
        "nome": "Pêra",
        "porcao": "1 unidade média",
        "calorias": 90,
        "ig": "baixo",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 54,
        "nome": "Mamão (papaya)",
        "porcao": "½ unidade média",
        "calorias": 90,
        "ig": "médio",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 55,
        "nome": "Manga",
        "porcao": "½ unidade média",
        "calorias": 90,
        "ig": "médio",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 56,
        "nome": "Figos",
        "porcao": "2 unidades pequenas",
        "calorias": 90,
        "ig": "baixo",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 57,
        "nome": "Kiwi",
        "porcao": "2 unidades",
        "calorias": 90,
        "ig": "baixo",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 58,
        "nome": "Pêssego",
        "porcao": "1 unidade grande",
        "calorias": 90,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "frutas"
    },
    {
        "id": 59,
        "nome": "Abacaxi",
        "porcao": "2 fatias",
        "calorias": 90,
        "ig": "baixo",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 60,
        "nome": "Melão",
        "porcao": "300g",
        "calorias": 90,
        "ig": "médio",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 61,
        "nome": "Melancia",
        "porcao": "300g",
        "calorias": 90,
        "ig": "alto",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 62,
        "nome": "Morango",
        "porcao": "10 unidades médias",
        "calorias": 90,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "frutas"
    },
    {
        "id": 63,
        "nome": "Ameixa",
        "porcao": "2 unidades",
        "calorias": 90,
        "ig": "baixo",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 64,
        "nome": "Uva itália",
        "porcao": "10 bagos",
        "calorias": 90,
        "ig": "médio",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },
    {
        "id": 65,
        "nome": "Laranja",
        "porcao": "1 unidade média",
        "calorias": 70,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "frutas"
    },
    {
        "id": 66,
        "nome": "Limão",
        "porcao": "1 unidade",
        "calorias": 20,
        "ig": "baixo",
        "ph": "alcalino-extremo",
        "categoria": "frutas"
    },

    // ============================================
    // HORTALIÇAS
    // ============================================
    {
        "id": 67,
        "nome": "Brócolis cozido no vapor",
        "porcao": "1 pires de chá",
        "calorias": 60,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "hortaliças"
    },
    {
        "id": 68,
        "nome": "Couve-flor cozida",
        "porcao": "1 pires de chá",
        "calorias": 60,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "hortaliças"
    },
    {
        "id": 69,
        "nome": "Espinafre refogado",
        "porcao": "1 pires de chá",
        "calorias": 60,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "hortaliças"
    },
    {
        "id": 70,
        "nome": "Abobrinha cozida",
        "porcao": "1 pires de chá",
        "calorias": 60,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "hortaliças"
    },
    {
        "id": 71,
        "nome": "Berinjela cozida",
        "porcao": "1 pires de chá",
        "calorias": 60,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "hortaliças"
    },
    {
        "id": 72,
        "nome": "Cenoura cozida",
        "porcao": "1 pires de chá",
        "calorias": 60,
        "ig": "médio",
        "ph": "alcalino-moderado",
        "categoria": "hortaliças"
    },
    {
        "id": 73,
        "nome": "Salada variada (alface, tomate, pepino)",
        "porcao": "1 prato grande",
        "calorias": 80,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "hortaliças"
    },
    {
        "id": 74,
        "nome": "Tomate",
        "porcao": "1 unidade média",
        "calorias": 20,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "hortaliças"
    },
    {
        "id": 75,
        "nome": "Pepino",
        "porcao": "1 unidade média",
        "calorias": 20,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "hortaliças"
    },
    {
        "id": 76,
        "nome": "Cebola",
        "porcao": "1 unidade média",
        "calorias": 50,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "hortaliças"
    },
    {
        "id": 77,
        "nome": "Pimentão",
        "porcao": "1 unidade média",
        "calorias": 25,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "hortaliças"
    },
    {
        "id": 78,
        "nome": "Repolho",
        "porcao": "1 prato de sobremesa",
        "calorias": 30,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "hortaliças"
    }
];

// Exportar para uso global (navegador) e módulos (Node)
if (typeof window !== 'undefined') {
    window.foodDatabasePart2 = foodDatabasePart2;
    // Unificar com a parte 1 em window.foodDatabase
    if (Array.isArray(window.foodDatabase)) {
        window.foodDatabase = window.foodDatabase.concat(foodDatabasePart2);
    } else {
        window.foodDatabase = foodDatabasePart2.slice();
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { foodDatabasePart2 };
}
