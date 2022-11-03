// Class for acquaintance with JS variables

console.log("Welcome back to training, Samuray");

var firstNumber = 5; // Mutable
var secondNumber = 6; // Imutable

firstNumber += firstNumber;

console.log("Sum of first and second variable is: ", firstNumber + secondNumber);

// Arrays
var witchers = ["Geralt", "Lambert", "Eskel", "Vesemir", "Leto", "Koyon"]
witchers[6] = "Somebody is her morjoviy"
for (var i = 0; i < witchers.length; i++){
    console.log(witchers[i])
}

console.log("Repititng the same with While...");

var i = witchers.length - 1;
while(i > -1){
    console.log(witchers[i]);
    i--;
}