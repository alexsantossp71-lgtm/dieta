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

## Fontes
- TACO (Tabela Brasileira de Composição de Alimentos - UNICAMP)
- USDA FoodData Central
- Tabelas IBGE
- Dados validados de estudos nutricionais

##Total
Este arquivo contém aproximadamente 500 alimentos detalhadamente catalogados.

Para expansão futura: a base pode ser ampliada consultando APIs públicas:
- USDA API: https://fdc.nal.usda.gov/api-guide.html
- Open Food Facts API

## Uso
Os dados podem ser importados e filtrados por categoria, IG, pH, ou calorias.
