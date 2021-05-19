var clicks = 0;
var clicksPerSecond = 0

// Generator Class
class Generator {
    constructor(name, price, power) {
        this.name = name
        this.price = price
        this.power = power
    }
}

// Autoclicker generator
const autoClicker = new Generator('Auto Clicker', 10, 1)

// An object that represents what the player has accquired
const inventory = {
    autoClicker: 0
}

// This is run when the page is opened!
function init() {
    setInterval(function() {
        clicks = clicks + (clicksPerSecond/20)
        update()
    }, 50);
}

// This method is ran when the click button is clicked.
function clicker() {
    clicks = clicks + 1;
    update();
}

// This method is used to update the UI visually and all its values.
function update() {
    document.getElementById("clickNum").innerHTML = clicks.toFixed(0);
    document.getElementById("cps").innerHTML = clicksPerSecond;
    document.getElementById("autoClickerCount").innerHTML = inventory.autoClicker;
    document.getElementById("autoClickerPrice").innerHTML = price(autoClicker).toFixed(0);
}

// Purchase an autoclicker!
function purchaseAutoClicker() {
    if (clicks >= price(autoClicker)){
        clicks = clicks - price(autoClicker);
        inventory.autoClicker++;
        clicksPerSecond = inventory.autoClicker * autoClicker.power;
    }
    update();
}

// Returns a number which is the price to purchase a generator
function price(generator) { 
    return Math.pow(generator.price, 1 + (0.1 * inventory.autoClicker))
}

init();