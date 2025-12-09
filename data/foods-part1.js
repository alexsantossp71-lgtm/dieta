/*
  DiEtA - Base de Dados Unificada de Alimentos
  Estrutura: nome, porção, calorias, índice glicêmico, pH, categoria
  
  Índice Glicêmico: "baixo" (<55), "médio" (55-69), "alto" (>70)
  pH: "alcalino-extremo", "alcalino-moderado", "alcalino-leve", "neutro", "ácido-leve", "ácido-moderado", "ácido-extremo"
*/

const foodDatabase = [
    // ============================================
    // CEREAIS E DERIVADOS
    // ============================================
    {
        "id": 1,
        "nome": "Arroz branco cozido",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 80,
        "ig": "alto",
        "ph": "ácido-leve",
        "categoria": "cereais"
    },
    {
        "id": 2,
        "nome": "Arroz integral cozido",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 80,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "cereais"
    },
    {
        "id": 3,
        "nome": "Arroz parboilizado",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 80,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "cereais"
    },
    {
        "id": 4,
        "nome": "Aveia em flocos",
        "porcao": "2 colheres de sopa (30g)",
        "calorias": 110,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "cereais"
    },
    {
        "id": 5,
        "nome": "Quinoa cozida",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 85,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "cereais"
    },
    {
        "id": 6,
        "nome": "Pão francês",
        "porcao": "1/2 unidade (25g)",
        "calorias": 80,
        "ig": "alto",
        "ph": "ácido-extremo",
        "categoria": "cereais"
    },
    {
        "id": 7,
        "nome": "Pão integral",
        "porcao": "1 fatia (25g)",
        "calorias": 80,
        "ig": "baixo",
        "ph": "ácido-moderado",
        "categoria": "cereais"
    },
    {
        "id": 8,
        "nome": "Pão de forma branco",
        "porcao": "1 fatia (25g)",
        "calorias": 80,
        "ig": "alto",
        "ph": "ácido-extremo",
        "categoria": "cereais"
    },
    {
        "id": 9,
        "nome": "Tapioca",
        "porcao": "1 unidade (50g)",
        "calorias": 68,
        "ig": "alto",
        "ph": "ácido-moderado",
        "categoria": "cereais"
    },
    {
        "id": 10,
        "nome": "Macarrão cozido",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 90,
        "ig": "médio",
        "ph": "ácido-extremo",
        "categoria": "cereais"
    },
    {
        "id": 11,
        "nome": "Macarrão integral",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 85,
        "ig": "baixo",
        "ph": "ácido-moderado",
        "categoria": "cereais"
    },
    {
        "id": 12,
        "nome": "Granola caseira",
        "porcao": "1 colher de sopa (30g)",
        "calorias": 60,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "cereais"
    },

    // ============================================
    // LEGUMINOSAS E OLEAGINOSAS
    // ============================================
    {
        "id": 13,
        "nome": "Feijão preto cozido",
        "porcao": "1 concha média (80g)",
        "calorias": 65,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "leguminosas"
    },
    {
        "id": 14,
        "nome": "Feijão carioca cozido",
        "porcao": "1 concha média (80g)",
        "calorias": 65,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "leguminosas"
    },
    {
        "id": 15,
        "nome": "Lentilha cozida",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 95,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "leguminosas"
    },
    {
        "id": 16,
        "nome": "Grão-de-bico cozido",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 120,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "leguminosas"
    },
    {
        "id": 17,
        "nome": "Ervilha cozida",
        "porcao": "2 colheres de sopa (60g)",
        "calorias": 50,
        "ig": "baixo",
        "ph": "alcalino-moderado",
        "categoria": "leguminosas"
    },
    {
        "id": 18,
        "nome": "Soja",
        "porcao": "2 colheres de sopa (60g)",
        "calorias": 78,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "leguminosas"
    },
    {
        "id": 19,
        "nome": "Amendoim",
        "porcao": "10 unidades (15g)",
        "calorias": 85,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "oleaginosas"
    },
    {
        "id": 20,
        "nome": "Castanha-do-pará",
        "porcao": "2 unidades (10g)",
        "calorias": 65,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "oleaginosas"
    },
    {
        "id": 21,
        "nome": "Castanha-de-caju",
        "porcao": "5 unidades (15g)",
        "calorias": 85,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "oleaginosas"
    },
    {
        "id": 22,
        "nome": "Amêndoas",
        "porcao": "10 unidades (15g)",
        "calorias": 85,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "oleaginosas"
    },
    {
        "id": 23,
        "nome": "Nozes",
        "porcao": "4 unidades (15g)",
        "calorias": 95,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "oleaginosas"
    },

    // ============================================
    // TUBÉRCULOS E RAÍZES
    // ============================================
    {
        "id": 24,
        "nome": "Batata inglesa cozida",
        "porcao": "1 unidade pequena (100g)",
        "calorias": 85,
        "ig": "alto",
        "ph": "ácido-extremo",
        "categoria": "tubérculos"
    },
    {
        "id": 25,
        "nome": "Batata-doce cozida",
        "porcao": "1 unidade pequena (100g)",
        "calorias": 90,
        "ig": "médio",
        "ph": "alcalino-leve",
        "categoria": "tubérculos"
    },
    {
        "id": 26,
        "nome": "Mandioca cozida",
        "porcao": "2 pedaços (100g)",
        "calorias": 125,
        "ig": "médio",
        "ph": "ácido-leve",
        "categoria": "tubérculos"
    },
    {
        "id": 27,
        "nome": "Inhame cozido",
        "porcao": "2 pedaços (100g)",
        "calorias": 100,
        "ig": "médio",
        "ph": "alcalino-leve",
        "categoria": "tubérculos"
    },
    {
        "id": 28,
        "nome": "Mandioquinha cozida",
        "porcao": "2 unidades (100g)",
        "calorias": 85,
        "ig": "alto",
        "ph": "ácido-leve",
        "categoria": "tubérculos"
    },
    {
        "id": 29,
        "nome": "Cará cozido",
        "porcao": "2 pedaços (100g)",
        "calorias": 115,
        "ig": "médio",
        "ph": "alcalino-leve",
        "categoria": "tubérculos"
    },
    {
        "id": 30,
        "nome": "Beterraba cozida",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 40,
        "ig": "alto",
        "ph": "alcalino-moderado",
        "categoria": "tubérculos"
    },
    {
        "id": 31,
        "nome": "Cenoura cozida",
        "porcao": "2 colheres de sopa (80g)",
        "calorias": 30,
        "ig": "médio",
        "ph": "alcalino-moderado",
        "categoria": "tubérculos"
    },

    // ============================================
    // CARNES E PROTEÍNAS
    // ============================================
    {
        "id": 32,
        "nome": "Peito de frango grelhado",
        "porcao": "1 filé médio (100g)",
        "calorias": 120,
        "ig": "baixo",
        "ph": "ácido-extremo",
        "categoria": "carnes"
    },
    {
        "id": 33,
        "nome": "Carne bovina magra",
        "porcao": "1 bife médio (100g)",
        "calorias": 140,
        "ig": "baixo",
        "ph": "ácido-extremo",
        "categoria": "carnes"
    },
    {
        "id": 34,
        "nome": "Filé mignon",
        "porcao": "1 filé (100g)",
        "calorias": 120,
        "ig": "baixo",
        "ph": "ácido-extremo",
        "categoria": "carnes"
    },
    {
        "id": 35,
        "nome": "Picanha grelhada",
        "porcao": "70g",
        "calorias": 120,
        "ig": "baixo",
        "ph": "ácido-extremo",
        "categoria": "carnes"
    },
    {
        "id": 36,
        "nome": "Carne moída magra",
        "porcao": "3 colheres de sopa (90g)",
        "calorias": 120,
        "ig": "baixo",
        "ph": "ácido-extremo",
        "categoria": "carnes"
    },
    {
        "id": 37,
        "nome": "Peixe branco (pescada)",
        "porcao": "1 filé médio (100g)",
        "calorias": 95,
        "ig": "baixo",
        "ph": "ácido-extremo",
        "categoria": "carnes"
    },
    {
        "id": 38,
        "nome": "Salmão",
        "porcao": "1 posta pequena (50g)",
        "calorias": 120,
        "ig": "baixo",
        "ph": "ácido-extremo",
        "categoria": "carnes"
    },
    {
        "id": 39,
        "nome": "Atum em conserva",
        "porcao": "1 lata pequena (80g)",
        "calorias": 120,
        "ig": "baixo",
        "ph": "ácido-extremo",
        "categoria": "carnes"
    },
    {
        "id": 40,
        "nome": "Ovo cozido",
        "porcao": "1 unidade grande (50g)",
        "calorias": 75,
        "ig": "baixo",
        "ph": "ácido-moderado",
        "categoria": "carnes"
    },
    {
        "id": 41,
        "nome": "Clara de ovo",
        "porcao": "3 unidades (90g)",
        "calorias": 45,
        "ig": "baixo",
        "ph": "alcalino-leve",
        "categoria": "carnes"
    },

    // ============================================
    // LATICÍNIOS
    // ============================================
    {
        "id": 42,
        "nome": "Leite desnatado",
        "porcao": "200ml (1 copo)",
        "calorias": 70,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "laticínios"
    },
    {
        "id": 43,
        "nome": "Leite integral",
        "porcao": "100ml",
        "calorias": 70,
        "ig": "baixo",
        "ph": "ácido-extremo",
        "categoria": "laticínios"
    },
    {
        "id": 44,
        "nome": "Iogurte natural desnatado",
        "porcao": "1 pote (170g)",
        "calorias": 60,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "laticínios"
    },
    {
        "id": 45,
        "nome": "Iogurte grego light",
        "porcao": "1 pote (100g)",
        "calorias": 60,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "laticínios"
    },
    {
        "id": 46,
        "nome": "Queijo branco",
        "porcao": "1 fatia (30g)",
        "calorias": 70,
        "ig": "baixo",
        "ph": "ácido-moderado",
        "categoria": "laticínios"
    },
    {
        "id": 47,
        "nome": "Ricota",
        "porcao": "1 fatia (50g)",
        "calorias": 70,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "laticínios"
    },
    {
        "id": 48,
        "nome": "Cottage",
        "porcao": "4 colheres de sopa (100g)",
        "calorias": 70,
        "ig": "baixo",
        "ph": "ácido-leve",
        "categoria": "laticínios"
    },
    {
        "id": 49,
        "nome": "Queijo minas frescal",
        "porcao": "1 fatia (30g)",
        "calorias": 70,
        "ig": "baixo",
        "ph": "ácido-moderado",
        "categoria": "laticínios"
    },
    {
        "id": 50,
        "nome": "Requeijão light",
        "porcao": "1 colher de sopa (20g)",
        "calorias": 35,
        "ig": "baixo",
        "ph": "ácido-moderado",
        "categoria": "laticínios"
    }
];

// Continua na próxima parte...
// Total planejado: 300+ alimentos

export default foodDatabase;
