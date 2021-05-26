var clicks = 0

// Generator Class
class Generator {
    constructor(name, price, power) {
        this.name = name
        this.price = price
        this.power = power
        this.quantity = 0
    }
}

var generators = [
    new Generator('Auto Clicker', 10, 1),
    new Generator('Super Clicker', 100, 10),
    new Generator('Mega Clicker', 1000, 100),
]

// This is run when the page is opened!
function init() {
    const refreshRate = 20 // Per second
    setInterval(function() {
        clicks = clicks + (clicksPerSecond() / refreshRate)
        update()
    }, 1000 / refreshRate)
}

// This method is ran when the click button is clicked.
function clicker() {
    clicks = clicks + 1
    update()
}

// This method is used to update the UI visually and all its values.
function update() {
    document.getElementById("clickNum").innerHTML = clicks.toFixed(0)
    document.getElementById("clicksPerSecond").innerHTML = clicksPerSecond()

    document.getElementById("autoClickerCount").innerHTML = generators[0].quantity
    document.getElementById("autoClickerPrice").innerHTML = price(generators[0]).toFixed(0)

    document.getElementById("superClickerCount").innerHTML = generators[1].quantity
    document.getElementById("superClickerPrice").innerHTML = price(generators[1]).toFixed(0)

    document.getElementById("megaClickerCount").innerHTML = generators[2].quantity
    document.getElementById("megaClickerPrice").innerHTML = price(generators[2]).toFixed(0)
}

// Purchase an autoclicker!
function purchaseGenerator(generatorIndex) {
    if (clicks >= price(generators[generatorIndex])){
        clicks = clicks - price(generators[generatorIndex])
        generators[generatorIndex].quantity++
    }
    update()
}

// Returns a number which is the price to purchase a generator
function price(generator) { 
    return Math.pow(generator.price, 1 + (0.1 * generator.quantity))
}

function clicksPerSecond() {
    cps = 0
    generators.forEach(generator => cps = cps + generator.quantity * generator.power)
    return cps
}

function save() {
    window.localStorage.clear()
    window.localStorage.setItem('clicks', clicks)
    window.localStorage.setItem('autoClickers', generators[0].quantity)
}

function load() {
    clicks = parseInt(window.localStorage['clicks'])
    generators[0].quantity = parseInt(window.localStorage['autoClickers'])
    update()
}

function clearSave() {
    window.localStorage.clear()
}

init()