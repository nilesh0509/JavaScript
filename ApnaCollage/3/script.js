// var num = prompt("Enter a number");

// if(num%2 === 0){
//     console.log("The number is even");
// }else{
//     console.log("The number is odd");
// }

for(let num = 0; num <= 100; num++ ){
    if(num%2 === 0){
        console.log("The number is even" , num);
    }
        
}

var num1 = 25;
let num2 = prompt("Gusse The Number");
while(num2!=num1){
    num2 = prompt("Your Gauss the wrong . Try Again");
}

console.log("Congrats! YOu Gauss The Number");


var firstName = prompt("Enter Your First Name");
console.log("Your first name is  " , firstName)
var lastName = prompt("Enter Your Last Name");
console.log("Your last name is  " , lastName)
var username = "@" + firstName + lastName + firstName.length;
console.log("Your userName is ",username);



