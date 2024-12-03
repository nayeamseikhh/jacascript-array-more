// 2. Print Numbers from N to 1
// Print all numbers from N down to 1.
// let N = 10;
// for (let i = N; i >= 1; i--) {
//   console.log(i);
// }

// 1. Print Numbers from 1 to N
// Print all numbers from 1 to a given N.
// let N = 10;
// for (let i = 1; i <= N; i++) {
//   console.log(i);
// }

// 3. Sum of First N Natural Numbers
// Calculate the sum of the first N natural numbers.
// let N = 10;
// let sum = 0;
// for (let i = 1; i <= N; i++) {
//   sum += i;
// }
// console.log(sum); // 55

// 4. Print Even Numbers from 1 to N
// Print all even numbers between 1 and N.
// let N = 10;
// let sum = 0;
// for( let i = 1; i <= N; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// 5. Print Odd Numbers from 1 to N
// Print all odd numbers between 1 and N.
// const N = 10;
// for (let i = 1; i<= N; i++){
//     if( i % 2 !== 0){
//         console.log(i)
//     }
// }

// 6. Reverse an Array
// Reverse an array manually.
// const arr = [1,2,3,4,5];
// let reversed = [];
// for (let i = arr.length-1 ; i >= 0; i--){
//     reversed.push(arr[i]);
// }
// console.log(reversed) // [5, 4, 3, 2, 1]

// 7. Find the Largest Number in an Array
// Find the largest number in an array.
// let arr = [3, 5, 7, 2, 8, 9, 11];
// let largest = arr[0];
// for( let i = 0; i <= arr.length; i++ ){
//     if(arr[i] > largest){
//         largest = arr[i];
//     }
// }
// console.log(largest)

// 8. Check if a Number is Prime
// Determine if a number N is prime.
// let N = 17;
// let isPrime = true;

// if (N < 2) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// console.log(isPrime); // true for 17


// 9. Factorial of a Number
// Calculate the factorial of a number N.
// let N = 5;
// let factorial = 1;

// for (let i = 1; i <= N; i++) {
//   factorial *= i;
// }
// console.log(factorial); // 120



// 10. Fibonacci Sequence
// Print the first N numbers of the Fibonacci sequence.
// let N = 10;
// let a = 0, b = 1;

// for (let i = 1; i <= N; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }


// 12. Find the Sum of Digits in a Number
// Calculate the sum of the digits of a number.
// let num = 12345;
// let sum =  0;

// while (num > 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(sum);
