// DiEtA - Integração com USDA FoodData Central API
// Acesso a 300.000+ alimentos

class FoodAPIManager {
    constructor() {
        // API Key da USDA (gratuita)
        // Obtenha em: https://fdc.nal.usda.gov/api-key-signup.html
        this.apiKey = localStorage.getItem('usda_api_key') || 'DEMO_KEY';
        this.baseURL = 'https://api.nal.usda.gov/fdc/v1';
        this.cache = this.loadCache();
    }

    // Configurar API Key
    setApiKey(key) {
        this.apiKey = key;
        localStorage.setItem('usda_api_key', key);
    }

    // Buscar alimentos por nome
    async searchFoods(query, pageSize = 50) {
        try {
            const url = `${this.baseURL}/foods/search?query=${encodeURIComponent(query)}&pageSize=${pageSize}&api_key=${this.apiKey}`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();
            return this.processFoodsData(data.foods || []);

        } catch (error) {
            console.error('Erro ao buscar alimentos:', error);
            return [];
        }
    }

    // Obter detalhes de um alimento específico
    async getFoodDetails(fdcId) {
        // Verificar cache
        const cached = this.cache[fdcId];
        if (cached) return cached;

        try {
            const url = `${this.baseURL}/food/${fdcId}?api_key=${this.apiKey}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();
            const processed = this.processFood(data);

            // Salvar no cache
            this.cache[fdcId] = processed;
            this.saveCache();

            return processed;

        } catch (error) {
            console.error('Erro ao obter detalhes:', error);
            return null;
        }
    }

    // Processar dados da API para nosso formato
    processFoodsData(foods) {
        return foods.map(food => ({
            id: food.fdcId,
            nome: food.description || food.lowercaseDescription,
            marca: food.brandOwner || '',
            categoria: food.foodCategory || 'Outros',
            calorias: this.extractCalories(food),
            porcao: this.extractPortion(food),
            ig: this.estimateGI(food),
            ph: this.estimatePH(food),
            proteinas: this.extractNutrient(food, 'Protein'),
            carboidratos: this.extractNutrient(food, 'Carbohydrate'),
            gorduras: this.extractNutrient(food, 'Total lipid (fat)'),
            fibras: this.extractNutrient(food, 'Fiber'),
            source: 'USDA'
        }));
    }

    // Processar alimento individual
    processFood(food) {
        return {
            id: food.fdcId,
            nome: food.description,
            categoria: food.foodCategory || 'Outros',
            calorias: this.extractCalories(food),
            porcao: '100g',
            ig: this.estimateGI(food),
            ph: this.estimatePH(food),
            nutrientes: this.extractAllNutrients(food),
            source: 'USDA'
        };
    }

    // Extrair calorias
    extractCalories(food) {
        if (food.foodNutrients) {
            const energy = food.foodNutrients.find(n =>
                n.nutrientName === 'Energy' ||
                n.nutrientName === 'Energy (Atwater General Factors)'
            );
            return energy ? Math.round(energy.value) : 0;
        }
        return 0;
    }

    // Extrair porção
    extractPortion(food) {
        if (food.servingSize && food.servingSizeUnit) {
            return `${food.servingSize}${food.servingSizeUnit}`;
        }
        return '100g';
    }

    // Extrair nutriente específico
    extractNutrient(food, nutrientName) {
        if (!food.foodNutrients) return 0;

        const nutrient = food.foodNutrients.find(n =>
            n.nutrientName && n.nutrientName.includes(nutrientName)
        );
        return nutrient ? Math.round(nutrient.value * 10) / 10 : 0;
    }

    // Extrair todos os nutrientes
    extractAllNutrients(food) {
        const nutrients = {};
        if (food.foodNutrients) {
            food.foodNutrients.forEach(n => {
                if (n.nutrientName && n.value) {
                    nutrients[n.nutrientName] = {
                        value: n.value,
                        unit: n.unitName
                    };
                }
            });
        }
        return nutrients;
    }

    // Estimar índice glicêmico baseado em carboidratos e fibras
    estimateGI(food) {
        const carbs = this.extractNutrient(food, 'Carbohydrate');
        const fiber = this.extractNutrient(food, 'Fiber');
        const sugars = this.extractNutrient(food, 'Sugars');

        // Lógica simplificada de estimativa
        if (carbs < 10) return 'baixo';
        if (fiber > 5 && fiber / carbs > 0.3) return 'baixo';
        if (sugars > 20 || carbs > 50) return 'alto';
        return 'médio';
    }

    // Estimar pH baseado na categoria do alimento
    estimatePH(food) {
        const category = (food.foodCategory || food.description || '').toLowerCase();

        // Alimentos alcalinos
        if (category.includes('fruit') && !category.includes('dried')) {
            return 'alcalino-moderado';
        }
        if (category.includes('vegetable') || category.includes('green')) {
            return 'alcalino-moderado';
        }
        if (category.includes('nut') || category.includes('seed')) {
            return 'alcalino-leve';
        }

        // Alimentos ácidos
        if (category.includes('meat') || category.includes('fish') || category.includes('poultry')) {
            return 'ácido-extremo';
        }
        if (category.includes('dairy') || category.includes('milk') || category.includes('cheese')) {
            return 'ácido-moderado';
        }
        if (category.includes('grain') || category.includes('bread') || category.includes('pasta')) {
            return 'ácido-extremo';
        }

        return 'neutro';
    }

    // Cache management
    loadCache() {
        const cached = localStorage.getItem('food_cache');
        return cached ? JSON.parse(cached) : {};
    }

    saveCache() {
        // Limitar cache a 500 itens
        const keys = Object.keys(this.cache);
        if (keys.length > 500) {
            const toKeep = keys.slice(-500);
            const newCache = {};
            toKeep.forEach(key => newCache[key] = this.cache[key]);
            this.cache = newCache;
        }
        localStorage.setItem('food_cache', JSON.stringify(this.cache));
    }

    clearCache() {
        this.cache = {};
        localStorage.removeItem('food_cache');
    }

    // Buscar alimentos brasileiros especificamente
    async searchBrazilianFoods(query) {
        const brazilianTerms = ['brazilian', 'brazil', 'açaí', 'feijão', 'mandioca'];
        const enhancedQuery = `${query} ${brazilianTerms.join(' OR ')}`;
        return this.searchFoods(enhancedQuery, 25);
    }

    // Sugestões populares
    getPopularSuggestions() {
        return [
            'chicken breast',
            'rice',
            'beans',
            'banana',
            'apple',
            'broccoli',
            'salmon',
            'egg',
            'bread',
            'milk',
            'avocado',
            'sweet potato',
            'quinoa',
            'oats',
            'yogurt'
        ];
    }
}

// Exportar para uso global
window.FoodAPIManager = FoodAPIManager;
window.foodAPI = new FoodAPIManager();

console.log('✅ USDA Food API Manager carregado!');
console.log('📊 Acesso a 300.000+ alimentos disponível');
console.log('🔑 Configure sua API key em: https://fdc.nal.usda.gov/api-key-signup.html');
