class GuessingGame {
    constructor() {}

        
   

    setRange(min, max) {
       this.min = min ;
       this.max = max ;     
    }

    guess() {
        return parseInt(((this.min + this.max )/2));
    }

    lower() {
        this.max = (this.min + this.max)/2 + 1;
    }

    greater() {
        this.min = (this.min + this.max)/2 - 1;
    }
}

module.exports = GuessingGame;
