// Task 1

var bills = [124, 48, 268];
var tips = [];
var amount = [];

var calc = function(bill) {
    for (var i = 0; i < bill.length; i++) {
        if (bill[i] < 50) {
            var tip = bill[i] / 100 * 20;
            tips.push(tip);
            amount.push(tip + bill[i]);
        } else if (bill[i] > 50 && bill[i] < 200) {
            var tip = bill[i] / 100 * 15;
            tips.push(tip);
            amount.push(tip + bill[i]);
        } else if (bill[i] > 200) {
            var tip = bill[i] / 100 * 10;
            tips.push(tip);
            amount.push(tip + bill[i]);
        }
    }
}

calc(bills);

// console.log(tips);
// console.log(amount);

// Task 2

var calc = function calcBmi() {
    this.bmi = this.mass / (this.height ^ 2);
    console.log(this);
    return this.bmi;
}

var Niky = {
    name: 'Niky',
    height: 1.8,
    mass: 75,
    bmi: calcBmi()
}

var Mike = {
    name: 'Mike',
    height: 1.9,
    mass: 85,
    calcBmi: function() {
        this.bmi = this.mass / (this.height ^ 2);
        return this.bmi;
    }
}

// Niky.calcBmi();
// Mike.calcBmi();

Niky.bmi > Mike.bmi ? console.log('Nike bmi is ' + Niky.bmi) : console.log('Mike bmi is ' + Mike.bmi)
