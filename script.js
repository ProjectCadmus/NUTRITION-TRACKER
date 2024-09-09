const foodData = {
    apple: { calories: 59, protein: 0.2, carbohydrate: 13.4, fat: 0.2 },
    banana: { calories: 116, protein: 1.2, carbohydrate: 27.2, fat: 0.3 },
    grapes: { calories: 58, protein: 0.6, carbohydrate: 13.1, fat: 0.4 },
    guava: { calories: 51, protein: 0.9, carbohydrate: 11.2, fat: 0.3 },
    papaya: { calories: 32, protein: 0.6, carbohydrate: 7.2, fat: 0.1 },
    pineapple: { calories: 46, protein: 0.4, carbohydrate: 10.8, fat: 0.1 },
    pomegranate: { calories: 65, protein: 1.6, carbohydrate: 14.5, fat: 0.1 },
    bajra: { calories: 361, protein: 11.6, carbohydrate: 67.5, fat: 5.0},
    jowar: { calories: 349, protein: 10.4, carbohydrate: 72.6, fat: 1.9},
    ragi: { calories: 328, protein: 7.3, carbohydrate: 72.0, fat: 1.3},
    wheatflour: { calories: 341, protein: 12.1, carbohydrate: 69.4, fat: 1.7},
    maida: { calories: 348, protein: 11.0, carbohydrate: 73.9, fat: 0.9},
    semolina: { calories: 348, protein: 10.4, carbohydrate: 74.8, fat: 0.8},
    vermicelli: { calories: 352, protein: 8.7, carbohydrate: 78.3, fat: 0.4},
    bengalgramdhal: { calories: 372, protein: 20.8, carbohydrate: 59.8, fat: 5.6},
    blackgramdhal: { calories: 347, protein: 24.0, carbohydrate: 59.6, fat: 1.4},
    greengramdhal: { calories: 348, protein: 24.5, carbohydrate: 59.9, fat: 1.2},
    rajmah: { calories: 346, protein: 22.9, carbohydrate: 60.6, fat: 1.3},
    soyabean: { calories: 432, protein: 43.2, carbohydrate: 20.9, fat: 19.5},
    bathualeaves: { calories: 30, protein: 3.7, carbohydrate: 2.9, fat: 0.4},
    bottlegourd: { calories: 39, protein: 2.3, carbohydrate: 6.1, fat: 0.7},
    cabbage: { calories: 27, protein: 1.8, carbohydrate: 4.6, fat: 0.1},
    cauliflower: { calories: 66, protein: 5.9, carbohydrate: 7.6, fat: 1.3},
    spinach: { calories: 26, protein: 2.0, carbohydrate: 2.9, fat: 0.7},
    carrot: { calories: 48, protein: 0.9, carbohydrate: 10.6, fat: 0.2},
    onion: { calories: 50, protein: 1.2, carbohydrate: 11.1, fat: 0.1},
    potato: { calories: 97, protein: 1.6, carbohydrate: 22.6, fat: 0.1},
    radish: { calories: 17, protein: 0.7, carbohydrate: 3.4, fat: 0.1},
    sweetpotato: { calories: 120, protein: 1.2, carbohydrate: 28.2, fat: 0.3},
    bittergourd: { calories: 25, protein: 1.6, carbohydrate: 4.2, fat: 0.2},
    brinjal: { calories: 24, protein: 1.4, carbohydrate: 4.0, fat: 0.3},
    cucumber: { calories: 13, protein: 0.4, carbohydrate: 2.5, fat: 0.1},
    ladiesfinger: { calories: 35, protein: 1.9, carbohydrate: 6.4, fat: 0.2},
    parwar: { calories: 20, protein: 2.0, carbohydrate: 2.2, fat: 0.3},
    almond: { calories: 655, protein: 20.8, carbohydrate: 10.5, fat: 58.9},
    cashewnut: { calories: 596, protein: 21.2, carbohydrate: 22.3, fat: 46.9},
    groundnut: { calories: 567, protein: 25.3, carbohydrate: 26.1, fat: 40.1},
    walnut: { calories: 687, protein: 15.6, carbohydrate: 11.0, fat: 64.5},
    milk: { calories: 117, protein: 4.3, carbohydrate: 5.0, fat: 6.5},
    milkcows: { calories: 67, protein: 3.2, carbohydrate: 4.4, fat: 4.1},
    skimmedmilk: { calories: 29, protein: 2.5, carbohydrate: 4.6, fat: 0.1},
    gheecow: { calories: 900, protein: 0.0, carbohydrate: 0.0, fat: 100.0},
    gheebuffalo: { calories: 900, protein: 0.0, carbohydrate: 0.0, fat: 100.0},
    refinedoil: { calories: 100, protein: 0.0, carbohydrate: 0.0, fat: 900.0},
    cookingoil: { calories: 100, protein: 0.0, carbohydrate: 0.0, fat: 900.0},
    honey: { calories: 31, protein: 0.3, carbohydrate: 79.5, fat: 0.0},
    sugarcane: { calories: 398, protein: 0.1, carbohydrate: 99.4, fat: 0.0},
    jaggery: { calories: 383, protein: 0.4, carbohydrate: 95.0, fat: 0.1},

};
    // Add more food items as needed

document.getElementById('compareForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const food1 = document.getElementById('food1').value.toLowerCase();
    const food2 = document.getElementById('food2').value.toLowerCase();
    const food3 = document.getElementById('food3').value.toLowerCase();
    const food4 = document.getElementById('food4').value.toLowerCase();

    if (![food1, food2, food3, food4].every(food => food in foodData)) {
        alert('Please enter valid common foods from the list.');
        return;
    }

    const labels = [capitalize(food1), capitalize(food2), capitalize(food3), capitalize(food4)];

    const chartConfigs = [
        {
            elementId: 'calorieChart',
            label: 'Calories (per 100g)',
            data: [foodData[food1].calories, foodData[food2].calories, foodData[food3].calories, foodData[food4].calories],
            backgroundColor: ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9']
        },
        {
            elementId: 'proteinChart',
            label: 'Protein (g per 100g)',
            data: [foodData[food1].protein, foodData[food2].protein, foodData[food3].protein, foodData[food4].protein],
            backgroundColor: ['#FFD662', '#009B77', '#DD4124', '#9B2335']
        },
        {
            elementId: 'carbohydrateChart',
            label: 'Carbohydrate (g per 100g)',
            data: [foodData[food1].carbohydrate, foodData[food2].carbohydrate, foodData[food3].carbohydrate, foodData[food4].carbohydrate],
            backgroundColor: ['#92A8D1', '#034F84', '#F7786B', '#DECF3F']
        },
        {
            elementId: 'fatChart',
            label: 'Fat (g per 100g)',
            data: [foodData[food1].fat, foodData[food2].fat, foodData[food3].fat, foodData[food4].fat],
            backgroundColor: ['#D65076', '#45B8AC', '#EFC050', '#5B5EA6']
        }
    ];

    chartConfigs.forEach(config => {
        const ctx = document.getElementById(config.elementId).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: config.label,
                    data: config.data,
                    backgroundColor: config.backgroundColor,
                    borderColor: config.backgroundColor.map(color => darkenColor(color)),
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Helper function to darken the color for border
function darkenColor(color) {
    const colorValue = parseInt(color.slice(1), 16);
    const darkerValue = Math.max(0, colorValue - 0x202020);
    return '#' + darkerValue.toString(16).padStart(6, '0');
}