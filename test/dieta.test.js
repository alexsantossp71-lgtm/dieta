// DiEtA - Suíte de testes automatizados
// Executar com: npm test  (ou node --test test/)
//
// Os arquivos de dados são carregados como no navegador (scripts clássicos),
// usando vm.runInThisContext para expor as variáveis/globais no escopo atual.

const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');

// ---------------------------------------------------------------------------
// Ambiente (stubs de navegador)
// ---------------------------------------------------------------------------

global.window = {};

function loadDataFile(relPath) {
    const code = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
    vm.runInThisContext(code, { filename: relPath });
}

const localStorageStub = {
    _store: {},
    getItem(key) { return Object.prototype.hasOwnProperty.call(this._store, key) ? this._store[key] : null; },
    setItem(key, value) { this._store[key] = String(value); },
    removeItem(key) { delete this._store[key]; }
};

// Stub mínimo de document para carregar script.js
global.document = { addEventListener() {} };
global.localStorage = localStorageStub;

// Carrega dados e scripts na ordem usada pelas páginas
loadDataFile('data/foods-part1.js');
loadDataFile('data/foods-part2.js');
loadDataFile('data/glycemic.js');
loadDataFile('data/ph.js');
loadDataFile('data/portions.js');
loadDataFile('data/food-api.js');
loadDataFile('script.js');

const VALID_IG = ['baixo', 'médio', 'alto'];

// ---------------------------------------------------------------------------
// Base de dados de alimentos
// ---------------------------------------------------------------------------

describe('Base de dados de alimentos', () => {
    test('window.foodDatabase contém partes 1 + 2 (78 alimentos)', () => {
        assert.ok(Array.isArray(window.foodDatabase));
        assert.strictEqual(window.foodDatabase.length, 78);
    });

    test('ids únicos e sequenciais (1..78)', () => {
        const ids = window.foodDatabase.map(f => f.id);
        assert.strictEqual(new Set(ids).size, ids.length, 'ids devem ser únicos');
        assert.deepStrictEqual(ids, [...Array(78).keys()].map(i => i + 1), 'ids devem ser 1..78');
    });

    test('todos os alimentos têm campos válidos', () => {
        for (const food of window.foodDatabase) {
            assert.ok(food.nome && food.nome.length > 0, `alimento ${food.id} sem nome`);
            assert.ok(food.calorias > 0, `alimento ${food.id} (${food.nome}) sem calorias positivas`);
            assert.ok(VALID_IG.includes(food.ig), `alimento ${food.id} (${food.nome}) com IG inválido: ${food.ig}`);
            assert.ok(food.ph && food.ph.length > 0, `alimento ${food.id} sem pH`);
            assert.ok(food.categoria && food.categoria.length > 0, `alimento ${food.id} sem categoria`);
            assert.ok(food.porcao && food.porcao.length > 0, `alimento ${food.id} sem porção`);
        }
    });

    test('alimentos.json é válido e consistente com as fontes JS', () => {
        const json = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/alimentos.json'), 'utf8'));
        assert.strictEqual(json.info.total_alimentos, json.alimentos.length);
        assert.strictEqual(json.alimentos.length, window.foodDatabase.length);

        // Mesma ordenação e conteúdo
        const fromJson = json.alimentos.map(f => JSON.stringify(f));
        const fromJs = window.foodDatabase.map(f => JSON.stringify(f));
        assert.deepStrictEqual(fromJson, fromJs, 'alimentos.json deve espelhar foods-part1.js + foods-part2.js');
    });
});

// ---------------------------------------------------------------------------
// Busca local (food-api.js)
// ---------------------------------------------------------------------------

describe('FoodAPIManager - busca local', () => {
    test('searchLocalFoods("arroz") encontra os 3 tipos de arroz', () => {
        const results = window.foodAPI.searchLocalFoods('arroz');
        const names = results.map(r => r.nome);
        assert.ok(names.includes('Arroz branco cozido'));
        assert.ok(names.includes('Arroz integral cozido'));
        assert.ok(names.includes('Arroz parboilizado'));
    });

    test('busca por múltiplos termos e sem acento/caixa', () => {
        const results = window.foodAPI.searchLocalFoods('QUEIJO MINAS');
        assert.strictEqual(results.length, 1);
        assert.strictEqual(results[0].nome, 'Queijo minas frescal');
    });

    test('busca sem resultados retorna lista vazia', () => {
        assert.deepStrictEqual(window.foodAPI.searchLocalFoods('xyzinexistente'), []);
    });

    test('resultados locais têm source = "local" e estrutura esperada', () => {
        const [food] = window.foodAPI.searchLocalFoods('banana');
        assert.ok(food);
        assert.strictEqual(food.source, 'local');
        assert.strictEqual(food.nome, 'Banana');
        assert.strictEqual(food.calorias, 90);
        assert.ok(food.ig && food.ph && food.porcao);
    });

    test('API fora do ar: retorna [] e registra lastError', async () => {
        global.fetch = async () => { throw new Error('offline'); };
        const results = await window.foodAPI.searchFoods('rice');
        assert.deepStrictEqual(results, []);
        assert.strictEqual(window.foodAPI.lastError, 'offline');
        delete global.fetch;
    });

    test('setApiKey persiste no localStorage', () => {
        window.foodAPI.setApiKey('TEST_KEY_123');
        assert.strictEqual(localStorageStub.getItem('usda_api_key'), 'TEST_KEY_123');
        assert.strictEqual(window.foodAPI.apiKey, 'TEST_KEY_123');
    });
});

// ---------------------------------------------------------------------------
// Índice glicêmico (glycemic.js)
// ---------------------------------------------------------------------------

describe('Índice glicêmico', () => {
    test('searchByGlycemicIndex("arroz") cobre as 3 classificações', () => {
        const results = searchByGlycemicIndex('arroz');
        assert.ok(results.green.length > 0);
        assert.ok(results.yellow.length > 0);
        assert.ok(results.red.length > 0);
    });

    test('searchByGlycemicIndex("banana") classifica banana como médio/alto', () => {
        const results = searchByGlycemicIndex('banana');
        assert.ok(results.green.some(i => i.name === 'Banana') || results.yellow.some(i => i.name === 'Banana') || results.red.some(i => i.name === 'Banana'));
    });

    test('busca sem resultados retorna listas vazias', () => {
        const results = searchByGlycemicIndex('zzzz');
        assert.strictEqual(results.green.length + results.yellow.length + results.red.length, 0);
    });

    test('getRecommendation responde para os 3 sinais', () => {
        assert.ok(getRecommendation('green').includes('Verde'));
        assert.ok(getRecommendation('yellow').includes('Amarelo'));
        assert.ok(getRecommendation('red').includes('Vermelho'));
    });
});

// ---------------------------------------------------------------------------
// pH (ph.js)
// ---------------------------------------------------------------------------

describe('Análise de pH', () => {
    test('searchByPH("limão") retorna alimento extremamente alcalino', () => {
        const results = searchByPH('limão');
        assert.strictEqual(results.length, 1);
        assert.strictEqual(results[0].ph, 'extreme-alkaline');
        assert.strictEqual(results[0].category, 'extremamenteAlcalinos');
    });

    test('getPhBadgeInfo mapeia todos os tipos', () => {
        assert.strictEqual(getPhBadgeInfo('extreme-alkaline').label, 'Extremamente Alcalino');
        assert.strictEqual(getPhBadgeInfo('moderate-acid').color, 'yellow');
        assert.strictEqual(getPhBadgeInfo('desconhecido').label, 'Neutro'); // fallback
    });

    test('calculatePhBalance calcula proporções corretamente', () => {
        const balance = calculatePhBalance([
            { ph: 'extreme-alkaline' },
            { ph: 'moderate-alkaline' },
            { ph: 'extreme-acid' },
            { ph: 'neutral' }
        ]);
        assert.strictEqual(balance.total, 4);
        assert.strictEqual(balance.alkalinePercent, 50);
        assert.strictEqual(balance.acidicPercent, 25);
        assert.strictEqual(balance.neutralCount, 1);
    });

    test('calculatePhBalance retorna null sem alimentos', () => {
        assert.strictEqual(calculatePhBalance([]), null);
    });
});

// ---------------------------------------------------------------------------
// Porções (portions.js)
// ---------------------------------------------------------------------------

describe('Calculadora de porções', () => {
    test('searchFood("banana") retorna as porções de banana', () => {
        const results = searchFood('banana');
        assert.ok(results.length >= 1);
        assert.strictEqual(results[0].calories, 90);
    });

    test('searchFood com filtro de categoria', () => {
        const results = searchFood('arroz', 'carboidratos');
        assert.strictEqual(results.length, 1);
        assert.strictEqual(results[0].category, 'carboidratos');
    });

    test('calculateTotalCalories soma porções', () => {
        assert.strictEqual(
            calculateTotalCalories([{ calories: 80, portions: 2 }, { calories: 120, portions: 1 }]),
            280
        );
    });
});

// ---------------------------------------------------------------------------
// script.js (utilitários compartilhados)
// ---------------------------------------------------------------------------

describe('script.js - utilitários', () => {
    test('escapeHtml neutraliza HTML/script injetado', () => {
        const escaped = window.DiEtA.escapeHtml('<script>alert("xss")</script>');
        assert.ok(!escaped.includes('<script>'));
        assert.ok(escaped.includes('&lt;script&gt;'));
        assert.ok(!escaped.includes('"'));
    });

    test('escapeHtml lida com null/undefined', () => {
        assert.strictEqual(window.DiEtA.escapeHtml(null), '');
        assert.strictEqual(window.DiEtA.escapeHtml(undefined), '');
    });

    test('formatCalories arredonda e adiciona kcal', () => {
        assert.strictEqual(window.DiEtA.formatCalories(123.4), '123 kcal');
    });
});
