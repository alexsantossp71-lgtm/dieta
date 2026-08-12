# 🥗 DiEtA — Planejamento Nutricional Inteligente

![CI](https://img.shields.io/github/actions/workflow/status/alexsantossp71-lgtm/dieta/test.yml?label=CI&logo=github)
![Pages](https://img.shields.io/github/actions/workflow/status/alexsantossp71-lgtm/dieta/pages.yml?label=Pages&logo=github)
![Tests](https://img.shields.io/badge/testes-24%20passando-00ff88)
![Licença](https://img.shields.io/github/license/alexsantossp71-lgtm/dieta)

Webapp de planejamento nutricional com ferramentas práticas para planejar, calcular e acompanhar uma dieta saudável. Totalmente em **JavaScript puro (vanilla)**, sem dependências, com dados armazenados localmente no navegador.

## ✨ Funcionalidades

| Ferramenta | Descrição |
|---|---|
| 🏠 **Dashboard** | Visão geral do dia: hidratação, calorias e refeições com barras de progresso |
| 🔍 **Busca de Alimentos** | Busca em base local (78 alimentos, offline) combinada com a API da USDA (300.000+ alimentos) |
| 🧮 **Calculadora de Porções** | Calorias e porções adequadas por categoria de alimento |
| 🚦 **Verificador Glicêmico** | Índice glicêmico com sistema de semáforo (verde/amarelo/vermelho) |
| ⚖️ **Analisador de pH** | Classificação de pH dos alimentos e proporções recomendadas |
| 📅 **Planejador de Refeições** | Estrutura recomendada de cardápio (energéticos, reguladores, construtores) |
| 📊 **Rastreador Diário** | Registro de refeições e hidratação com histórico do dia |

## 🚀 Como executar

Não há build nem dependências — basta servir a pasta do projeto:

```bash
# Opção 1: servidor estático (recomendado)
python3 -m http.server 8080
# abra http://localhost:8080

# Opção 2: apenas abra o arquivo index.html no navegador
```

> A busca de alimentos funciona **offline** (base local). A integração com a API da USDA é opcional: solicite uma chave gratuita em [fdc.nal.usda.gov/api-key-signup.html](https://fdc.nal.usda.gov/api-key-signup.html) e salve-a na página "Buscar Alimentos".

## 🧪 Testes

A suíte de testes valida a base de dados, as funções de busca (IG, pH, porções) e o gerenciador da API:

```bash
npm test
```

Há integração contínua via GitHub Actions (`.github/workflows/test.yml`) e deploy automático de Pages (`.github/workflows/pages.yml`).

## 📁 Estrutura do projeto

```
├── index.html              # Dashboard principal
├── script.js               # Lógica compartilhada (localStorage, utilitários)
├── style.css               # Estilos globais
├── pages/                  # Páginas de cada ferramenta
│   ├── api-search.html     #   Busca de alimentos (local + USDA)
│   ├── education.html      #   Módulo educacional
│   ├── glycemic.html       #   Índice glicêmico
│   ├── ph.html             #   pH dos alimentos
│   ├── planner.html        #   Planejador de refeições
│   ├── portions.html       #   Calculadora de porções
│   └── tracker.html        #   Rastreador diário
├── data/                   # Base de dados de alimentos (JS + JSON)
├── documentos/             # Fontes de conteúdo nutricional (txt)
└── test/                   # Testes automatizados (node --test)
```

## 🗄️ Base de dados de alimentos

78 alimentos catalogados (cereais, leguminosas, oleaginosas, tubérculos, carnes, laticínios, frutas e hortaliças) com calorias, índice glicêmico, pH e porção. Detalhes em [`data/README-alimentos.md`](data/README-alimentos.md).

**Fontes:** TACO/UNICAMP, USDA FoodData Central, tabelas IBGE e estudos nutricionais validados.

## 🛠️ Tecnologias

- HTML5 + CSS3 (design responsivo, tema escuro)
- JavaScript vanilla (ES6+)
- `localStorage` para persistência de dados
- [USDA FoodData Central API](https://fdc.nal.usda.gov/) (opcional)
- Testes com `node --test` (Node.js ≥ 20)

## 📄 Licença

Distribuído sob a licença MIT — veja [LICENSE](LICENSE).
