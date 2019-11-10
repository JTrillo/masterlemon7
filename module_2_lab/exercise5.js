// SLOT MACHINE

class SlotMachine {
    constructor() {
        this.coinCounter = 0;
    }

    play() {
        this.coinCounter++;
        if (this.generateRandom() && this.generateRandom() && this.generateRandom()) {
            console.log(`Congratulations!!!. You won ${this.coinCounter} coins!!`);
            this.coinCounter = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }

    generateRandom() { //[0, 0.5) --> false, [0.5, 1) --> true
        return Math.random() >= 0.5;
    }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();