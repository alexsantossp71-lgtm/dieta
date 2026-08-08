# README - Base de Dados de Alimentos

## Sobre
Base de dados unificada com informações nutricionais de alimentos brasileiros e internacionais.

## Estrutura
Cada alimento contém:
- **id**: Identificador único
- **nome**: Nome do alimento
- **porcao**: Porção de referência
- **calorias**: Valor calórico
- **ig**: Índice glicêmico (baixo/médio/alto)
- **ph**: Classificação de pH
- **categoria**: Grupo alimentar

## Arquivos
- **foods-part1.js**: Parte 1 (50 alimentos: cereais, leguminosas, oleaginosas, tubérculos, carnes,
  laticínios). Expõe `window.foodDatabase` para uso direto no navegador.
- **foods-part2.js**: Parte 2 (28 alimentos: frutas e hortaliças). Deve ser carregado **depois** da
  parte 1 — ele adiciona seus alimentos a `window.foodDatabase`. Também exporta `module.exports` para Node.
- **alimentos.json**: Versão JSON da base unificada (partes 1 + 2), gerada a partir dos `.js`.
  Para regenerar:
  `node -e "const {foodDatabase}=require('./data/foods-part1.js'); const {foodDatabasePart2}=require('./data/foods-part2.js'); require('fs').writeFileSync('data/alimentos.json', JSON.stringify({info:{versao:'1.0',total_alimentos:foodDatabase.length+foodDatabasePart2.length,descricao:'Base de dados unificada de alimentos'},alimentos:foodDatabase.concat(foodDatabasePart2)},null,2));"`

Total atual: 78 alimentos. Total planejado: 300+ (partes 3, 4, ...).

## Fontes
- TACO (Tabela Brasileira de Composição de Alimentos - UNICAMP)
- USDA FoodData Central
- Tabelas IBGE
- Dados validados de estudos nutricionais

Para expansão futura: a base pode ser ampliada consultando APIs públicas:
- USDA API: https://fdc.nal.usda.gov/api-guide.html
- Open Food Facts API

## Uso
Os dados podem ser importados e filtrados por categoria, IG, pH, ou calorias.
Na página **Busca de Alimentos** (`pages/api-search.html`), a base local é consultada
primeiro (funciona offline) e os resultados da API da USDA são combinados quando disponíveis.
