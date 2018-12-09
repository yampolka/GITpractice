

module.exports = class TaxCalculer {
    constructor() {

    }

    calcPrice(price, tax) {
        let res = price * tax;
        return res;
    }

    calcCalifornia(price) {
        let tax = this.calcPrice(price, 0.25);
        return tax;
    }

    calcTexas(price) {
        let tax = this.calcPrice(price, 0.15);
        return tax;
    }

};