// Dados de Índice Glicêmico - baseado em TGI.txt

const glycemicIndexData = {
    proteinas: {
        carnesOvos: {
            green: [
                "Ovos",
                "Peixes (sem farinha)",
                "Carne bovina (lagarto, coxão mole)",
                "Peito de frango sem pele",
                "Peito de peru sem pele",
                "Carne moída magra",
                "Carne de avestruz",
                "Filé mignon suíno"
            ],
            yellow: [
                "Lombinho canadense",
                "Cordeiro",
                "Lombo de porco",
                "Bisteca de porco"
            ],
            red: [
                "Bacon",
                "Salsicha",
                "Carnes processadas",
                "Hambúrguer industrializado",
                "Costelinha de porco",
                "Costelinha bovina"
            ]
        },
        laticínios: {
            green: [
                "Leite desnatado",
                "Queijo light",
                "Cottage",
                "Ricota",
                "Iogurte light",
                "Coalhada caseira"
            ],
            yellow: [
                "Leite semi-desnatado",
                "Requeijão light",
                "Queijo branco",
                "Iogurte integral"
            ],
            red: [
                "Leite integral",
                "Creme de leite",
                "Chantily",
                "Sorvetes de massa",
                "Queijos amarelos",
                "Cream cheese"
            ]
        },
        outros: {
            green: [
                "Proteína de soja",
                "Whey protein",
                "Proteína da clara de ovo",
                "Sorvete frozen diet"
            ],
            yellow: [],
            red: []
        }
    },

    carboidratos: {
        cereaisSementes: {
            green: [
                "Sementes de chia",
                "Quinua (grão e flocos)",
                "Amaranto",
                "All bran",
                "Aveia flocos grandes",
                "Granola caseira",
                "Farelo de aveia",
                "Arroz selvagem",
                "Arroz basmati",
                "Arroz integral de grãos longos",
                "Arroz parboilizado",
                "Arroz negro",
                "Arroz vermelho"
            ],
            yellow: [
                "Flocos de trigo",
                "Flocos de arroz",
                "Massas comuns (fettuccine, penne, linguine, vermicelli, espaguete)"
            ],
            red: [
                "Tapioca simples",
                "Granola industrializada",
                "Musli industrializado",
                "Arroz branco",
                "Bolos",
                "Biscoitos",
                "Nhoque",
                "Macarrão instantâneo",
                "Ravióli de queijo",
                "Pizza"
            ]
        },
        paesGraos: {
            green: [
                "Pães de farinha de oleaginosas/sementes",
                "Pão de amêndoas",
                "Pão de coco",
                "Pão de linhaça",
                "Pão de chia"
            ],
            yellow: [
                "Pães de grãos integrais com sementes",
                "Pão árabe integral",
                "Panqueca de farinha integral e sementes"
            ],
            red: [
                "Pão branco",
                "Pão de hambúrguer",
                "Bagel",
                "Baguete",
                "Pães de leite",
                "Bisnaguinhas",
                "Croissant",
                "Donut",
                "Panqueca com farinha branca",
                "Waffle",
                "Biscoitos",
                "Bolachas"
            ]
        }
    },

    frutas: {
        green: [
            "Abacate",
            "Maçã",
            "Pêssego",
            "Pêra",
            "Laranja",
            "Grapefruit",
            "Ameixa",
            "Morango",
            "Mirtilo",
            "Framboesa",
            "Kiwi",
            "Nectarina",
            "Figo",
            "Amoras",
            "Abacaxi"
        ],
        yellow: [
            "Banana",
            "Mamão",
            "Uva",
            "Manga",
            "Damasco seco",
            "Pêra seca",
            "Figo seco",
            "Melão"
        ],
        red: [
            "Uva-passa",
            "Ameixa seca",
            "Frutas em calda",
            "Tâmaras",
            "Banana-passa",
            "Melancia"
        ]
    },

    sucos: {
        green: [
            "Limão",
            "Maracujá",
            "Abacaxi"
        ],
        yellow: [
            "Maçã",
            "Grapefruit",
            "Papaya",
            "Melão"
        ],
        red: [
            "Todos os sucos com açúcar",
            "Bebidas à base de frutas industrializadas"
        ]
    },

    hortaliças: {
        green: [
            "Aspargo",
            "Aipo",
            "Brócolis",
            "Cebola",
            "Couve-flor",
            "Cogumelo",
            "Vagem-manteiga",
            "Ervilha",
            "Ervilha-torta",
            "Abobrinha",
            "Espinafre",
            "Berinjela",
            "Repolho",
            "Alface",
            "Tomate",
            "Pepino",
            "Pimentão",
            "Azeitona",
            "Picles",
            "Cenoura crua",
            "Rúcula",
            "Agrião",
            "Quiabo",
            "Jiló",
            "Rabanete",
            "Nabo"
        ],
        yellow: [
            "Milho",
            "Mandioca",
            "Inhame",
            "Cará",
            "Cenoura cozida",
            "Batata doce"
        ],
        red: [
            "Batata inglesa",
            "Fava",
            "Mandioquinha",
            "Beterraba cozida"
        ]
    },

    gorduras: {
        green: [
            "Azeite de oliva",
            "Óleo de linhaça prensado a frio",
            "Óleo de gergelim",
            "Amêndoa",
            "Amendoins",
            "Avelãs",
            "Nozes",
            "Castanha-do-pará",
            "Castanha-de-caju",
            "Sementes de abóbora",
            "Sementes de girassol",
            "Pinolis",
            "Pistache",
            "Azeitonas",
            "Pasta de gergelim",
            "Macadâmia",
            "Pasta de amendoim sem açúcar"
        ],
        yellow: [
            "Óleo de milho",
            "Óleo de girassol",
            "Maionese light"
        ],
        red: [
            "Manteiga",
            "Margarinas",
            "Azeite-de-dendê",
            "Maionese",
            "Margarina cremosa",
            "Gordura vegetal hidrogenada"
        ]
    },

    sopas: {
        green: [
            "Sopas com feijão",
            "Sopas com lentilhas",
            "Sopas com hortaliças permitidas"
        ],
        yellow: [
            "Lentilha batida",
            "Sopa de tomate",
            "Sopa de ervilha"
        ],
        red: [
            "Sopas com creme de leite",
            "Sopas com carboidratos do sinal vermelho",
            "Sopa de ervilha partida",
            "Sopa de ervilha fresca",
            "Macarrão instantâneo"
        ]
    },

    molhos: {
        green: [
            "Molho vinagrete"
        ],
        yellow: [
            "Molho ao pesto",
            "Molho ao sugo"
        ],
        red: [
            "Molhos à base de creme de leite",
            "Molhos de queijos",
            "Molho branco",
            "Molho rose"
        ]
    }
};

// Função para buscar alimentos por índice glicêmico
function searchByGlycemicIndex(query) {
    const results = { green: [], yellow: [], red: [] };
    const lowerQuery = query.toLowerCase();

    function searchInCategory(category, categoryName) {
        ['green', 'yellow', 'red'].forEach(signal => {
            if (category[signal]) {
                category[signal].forEach(item => {
                    if (item.toLowerCase().includes(lowerQuery)) {
                        results[signal].push({
                            name: item,
                            category: categoryName,
                            signal: signal
                        });
                    }
                });
            }
        });
    }

    // Buscar em todas as categorias
    Object.entries(glycemicIndexData).forEach(([mainCat, data]) => {
        if (data.green || data.yellow || data.red) {
            searchInCategory(data, mainCat);
        } else {
            Object.entries(data).forEach(([subCat, subData]) => {
                searchInCategory(subData, `${mainCat} - ${subCat}`);
            });
        }
    });

    return results;
}

// Função para obter recomendação baseada no sinal
function getRecommendation(signal) {
    const recommendations = {
        green: "✅ Sinal Verde - Consumir à vontade. Baixo índice glicêmico.",
        yellow: "⚠️ Sinal Amarelo - Consumir com moderação. Médio índice glicêmico.",
        red: "🛑 Sinal Vermelho - Evitar ao máximo. Alto índice glicêmico."
    };
    return recommendations[signal] || "";
}

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { glycemicIndexData, searchByGlycemicIndex, getRecommendation };
}
