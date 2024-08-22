function calculateSimpleInterest(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100;
        return simpleInterest;
}

let principal = 1000; 
let rate = 5;          
let time = 3;          

let interest = calculateSimpleInterest(principal, rate, time);
console.log(`The simple interest is: ${interest}`);
