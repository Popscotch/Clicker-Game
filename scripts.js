window.onload = function() {
    console.log("I AM READING THE SCRIPT");
};

clicks = 0;
clicksPerSecond = 0

function init() {
    console.log("init()")
    setInterval(function() {
        clicks = clicks + clicksPerSecond
        update()
    }, 1000);
}

function clicker() {
    clicks = clicks + 1;
    update();
}

function update() {
    document.getElementById("clickNum").innerHTML = clicks;
    document.getElementById("cps").innerHTML = clicksPerSecond;
}

function purchaseAutoClicker() {
    if (clicks >= 10){
        clicks = clicks - 10;
        clicksPerSecond = clicksPerSecond + 1;
    }
    update();
}

init();