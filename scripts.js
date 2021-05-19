var clicks = 0;

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
    const refreshRate = 20 // Per second
    setInterval(function() {
        clicks = clicks + (clicksPerSecond() / refreshRate)
        update()
    }, 1000 / refreshRate);
}

// This method is ran when the click button is clicked.
function clicker() {
    clicks = clicks + 1;
    update();
}

// This method is used to update the UI visually and all its values.
function update() {
    document.getElementById("clickNum").innerHTML = clicks.toFixed(0);
    document.getElementById("cps").innerHTML = clicksPerSecond();
    document.getElementById("autoClickerCount").innerHTML = inventory.autoClicker;
    document.getElementById("autoClickerPrice").innerHTML = price(autoClicker).toFixed(0);
}

// Purchase an autoclicker!
function purchaseAutoClicker() {
    if (clicks >= price(autoClicker)){
        clicks = clicks - price(autoClicker);
        inventory.autoClicker++;
    }
    update();
}

// Returns a number which is the price to purchase a generator
function price(generator) { 
    return Math.pow(generator.price, 1 + (0.1 * inventory.autoClicker))
}

function clicksPerSecond(){
    return inventory.autoClicker * autoClicker.power;
}

function save() {
    window.localStorage.clear();
    window.localStorage.setItem('clicks', clicks)
    window.localStorage.setItem('autoClickers', inventory.autoClicker)
}

function load(){
    clicks = parseInt(window.localStorage['clicks']);
    inventory.autoClicker = parseInt(window.localStorage['autoClickers']);
    update();
}

init();