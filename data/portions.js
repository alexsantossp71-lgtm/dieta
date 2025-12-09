// Dados de Porções - baseado em porcoes2.txt

const portionsData = {
  carboidratos: [
    { name: "½ pão francês", calories: 80, amount: "½ unidade" },
    { name: "Pão de forma", calories: 80, amount: "1 fatia" },
    { name: "Pão integral", calories: 80, amount: "1 fatia" },
    { name: "Bolachas água e sal", calories: 80, amount: "3 unidades" },
    { name: "Pão light", calories: 80, amount: "1½ fatia" },
    { name: "Arroz", calories: 80, amount: "2 colheres de sopa" },
    { name: "Purê", calories: 80, amount: "2 colheres de sopa" },
    { name: "Batata pequena cozida", calories: 80, amount: "1 unidade" },
    { name: "Massa simples cozida", calories: 80, amount: "1 colher grande" },
    { name: "Torradas", calories: 80, amount: "3 unidades" },
    { name: "Barra de cereais", calories: 80, amount: "¾ unidade" },
    { name: "Sachê de carboidrato", calories: 80, amount: "1 unidade" },
    { name: "Quinua", calories: 80, amount: "1½ colher de sopa" },
    { name: "Tapioca", calories: 68, amount: "50g" },
    { name: "Granola caseira", calories: 60, amount: "1 colher de sopa cheia" },
    { name: "Pão alemão Fitness", calories: 75, amount: "35.7g (½ fatia)" }
  ],

  leiteDerivados: [
    { name: "Leite desnatado", calories: 70, amount: "200ml" },
    { name: "Leite semi-desnatado", calories: 70, amount: "130ml" },
    { name: "Leite integral", calories: 70, amount: "100ml" },
    { name: "Queijo branco", calories: 70, amount: "30g (1 fatia média)" },
    { name: "Iogurte light", calories: 70, amount: "1 pote" },
    { name: "Polenguinho", calories: 70, amount: "1 unidade" },
    { name: "Polenguinho light", calories: 70, amount: "2 unidades" },
    { name: "Ricota", calories: 70, amount: "50g (1 fatia)" },
    { name: "Cottage", calories: 70, amount: "4 colheres de sopa" },
    { name: "Requeijão light", calories: 70, amount: "4 colheres de chá" }
  ],

  carnes: [
    { name: "Carne magra", calories: 120, amount: "100g (1 bife palma da mão)" },
    { name: "Picanha grelhada", calories: 120, amount: "70g" },
    { name: "Filé de frango", calories: 120, amount: "100g (1 filé médio)" },
    { name: "Pescada ou linguado", calories: 120, amount: "100g (1-2 filés)" },
    { name: "Atum, bacalhau ou cação", calories: 120, amount: "80g (1 posta pequena)" },
    { name: "Salmão", calories: 120, amount: "50g (1 posta pequena)" },
    { name: "Carne moída", calories: 120, amount: "3 colheres de sopa" },
    { name: "Ovos (clara+gema)", calories: 120, amount: "2 claras + 1 gema" },
    { name: "Kibe assado", calories: 120, amount: "1 quadrado pequeno (8x4x2cm)" }
  ],

  frutas: [
    { name: "Banana", calories: 90, amount: "1 unidade média" },
    { name: "Maçã", calories: 90, amount: "1 unidade média" },
    { name: "Pêra", calories: 90, amount: "1 unidade média" },
    { name: "Papaya", calories: 90, amount: "½ unidade média" },
    { name: "Manga", calories: 90, amount: "½ unidade média" },
    { name: "Figos", calories: 90, amount: "2 unidades pequenas" },
    { name: "Kiwi", calories: 90, amount: "2 unidades" },
    { name: "Pêssego", calories: 90, amount: "1 unidade grande" },
    { name: "Abacaxi", calories: 90, amount: "2 fatias" },
    { name: "Melão ou melancia", calories: 90, amount: "300g" },
    { name: "Morango", calories: 90, amount: "10 unidades médias" },
    { name: "Ameixa", calories: 90, amount: "2 unidades" },
    { name: "Uva itália", calories: 90, amount: "10 bagos" }
  ],

  frutasSecas: [
    { name: "Damasco seco", calories: 130, amount: "100g" },
    { name: "Pêra seca", calories: 130, amount: "100g" },
    { name: "Uva-passa", calories: 130, amount: "50g" },
    { name: "Banana passa", calories: 130, amount: "2 unidades" },
    { name: "Ameixa seca", calories: 130, amount: "5 unidades" },
    { name: "Figo seco", calories: 130, amount: "2 unidades médias" }
  ],

  hortaliçasCruas: [
    { name: "Salada variada", calories: 80, amount: "1 prato grande", description: "Folhas, tomate, pepino, salsão, erva-doce, rabanete à vontade + 1 colher de chá de azeite" }
  ],

  hortaliçasCozidas: [
    { name: "Legumes ou verduras no vapor", calories: 60, amount: "1 pires de chá" }
  ]
};

// Função auxiliar para buscar alimentos
function searchFood(query, category = null) {
  const results = [];
  const lowerQuery = query.toLowerCase();

  const categories = category ? [category] : Object.keys(portionsData);

  categories.forEach(cat => {
    portionsData[cat].forEach(item => {
      if (item.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          ...item,
          category: cat
        });
      }
    });
  });

  return results;
}

// Função para calcular calorias totais
function calculateTotalCalories(foodItems) {
  return foodItems.reduce((total, item) => {
    const portions = item.portions || 1;
    return total + (item.calories * portions);
  }, 0);
}

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portionsData, searchFood, calculateTotalCalories };
}
