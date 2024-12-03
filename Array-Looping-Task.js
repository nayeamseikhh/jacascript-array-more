// task 1
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
colors.reverse();
console.log(colors);

//task 2
let num = [];
const numbers = [12, 98, 5, 41, 23, 78, 46];
for (i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        num.push(numbers[i]);
    }
}
console.log(num)

//task 3 
let result = '';
const number = ['Tom', 'Tim', 'Tin', 'Tik'];
for(let name of number){
    result += name;
}
console.log(result);

//task 4
const statement = 'I am a hard working person';
const rev = statement.split(' ').reverse().join(' ');
console.log(rev)