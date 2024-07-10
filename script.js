function displayUpsmash() {
if (document.getElementById("textUpsmash").innerHTML === "HI") {
    document.getElementById("textUpsmash").innerHTML = "";
} else {
    document.getElementById("textUpsmash").innerHTML = "HI";
}};

class kbCalc {
    constructor(bkb, kbg, percent, fallSpeed, weight, moveDmg) {
        this.bkb = bkb,
        this.kbg = kbg,
        this.percent = percent,
        this.fallSpeed = fallSpeed,
        this.weight = weight,
        this.moveDmg = moveDmg
    }

    kbFormula() {
       return (this.bkb * this.percent)
}};


let totalKB = kbCalc;
console.log(totalKB);



