let arr = [85, 97, 44, 37, 76, 60];
sum = 0;

 for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
}
console.log("The sum of arr is",sum);
console.log("The average of array is",sum / arr.length);



let price = [250, 645, 300, 900, 50];
let offer = 0.9;
for (let i = 0; i < price.length; i++) {
    price[i] = price[i] * offer;
}
console.log(price);