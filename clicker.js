// CALL VARIABLES
var DonerCount = 0;
var CountMultiplier = 1;
// AUTODONERUPGRADE VARIABLES
var autoDonerUpgrade = 1;
// CALL ELEMENTS
// EVERY SECOND
const EverySecondTimer = setInterval(() => {
    if (autoDonerUpgrade > 1) {
        autoDonerCalc();
    }
}, 1000);
// EVERY .1 SECOND
const timer = setInterval(() => {
    document.getElementById("donerCountNumber").innerHTML = Math.floor(DonerCount);
}, 100);
// CHECKS FOR MOUSE CLICK ON ELEMENT
document.getElementById("autoDoner").onclick = function () { autoDoner() };
document.getElementById("click").onclick = function () { click() };
document.getElementById("clickUpgrade").onclick = function () { clickUpgrade() };

// FUNCTIONS
// AUTO DONER UPGRADE
function autoDoner() {
    let x = 50 * autoDonerUpgrade;
    if (DonerCount > x) {
        DonerCount -= x;
        autoDonerUpgrade += 0.1;
        document.getElementById("error").innerHTML = "";
    } else {
        document.getElementById("error").innerHTML = "Niet genoeg moela";
    }
}
// CALCULATES DONER
function autoDonerCalc() {
    DonerCount += autoDonerUpgrade;
}
// CLICK FUNCTION
function click() {
    DonerCount += CountMultiplier;
}
// CLICK UPGRADE
function clickUpgrade() {
    let x = 100 * CountMultiplier;
    if (DonerCount > x) {
        DonerCount -= x;
        CountMultiplier += 0.2;
        document.getElementById("error").innerHTML = "";
    } else {
        document.getElementById("error").innerHTML = "Niet genoeg moela";
    }
}