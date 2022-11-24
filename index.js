// == FIBONACCI USING A FOR LOOP == /

// let fibonacci = (n) => {
//   let fib = [0,1];
//   for(let i=2; i<=n; i++){
//     fib[i] = fib[i-1] + fib[i-2];
//   }
//   return fib;
// }
// console.log('FIBONACCI',fibonacci(10));

//== SUM OF FIBONACCI NUMBER USING A RECURSIVE FUNCTION  ==//

// const fibo = (n)=> {
//    if(n==0){
//     return 0;
//    } else if(n==1){
//     return 1
//    } else {
//      return  fibo(n-1) + fibo(n-2)
//    }
// }
// console.log('FIBO',fibo(50));

// == FACTORIAL ==//

let fact = (n) => {
   let number = 1;
   for(let i =2; i<=n; i++) {
    if(n<2) {
      number = 1
     } else {
      number = number * i
     }
   }
  return number;
}
console.log(fact(5));

// == PRIME NUMBER == /

const isPrime = (n) =>  {
  let number = true;
  if(n<2){
    return !number
  }else if(n%2 == 0){
    return !number
  } else {
    return number
  }
}
console.log(isPrime(5));

//== RANGE OF PRIME NUMBER ==//

const prime = (n)=> {
  let primeNumber = []
  let result;
  for (let i =2; i<n; i++) {
    if(i%2!=0) {
       result = primeNumber.push(i);
    }
  }
  return primeNumber;
}
console.log(prime(100));

//== ODD NUMBER OR EVENT NUMBER ==//
let oddOrEventNum = (n)=> {
    if(n%2==0) {
      return 'number is Event'
    } else {
      return 'number is Odd'
    }
}
console.log(oddOrEventNum(2));

//==RANGE ODD NUMBER ==//
const oddNums = (n)=> {
  let primeNumber = []
  let event;
  let odd
  for (let i =2; i<n; i++) {
  if(i%2!=0) {
      odd = primeNumber.push(i)
    }
  }
  return primeNumber;
}

console.log('Odd Number ', oddNums(10))

// LINEAR SEARCH 
const linearSearch = (arr, target)=> {
   for(let i = 0; i<arr.length; i++) {
    if(arr[i]===target) {
      return i;
     }
   }
   return -1
}
console.log('LINEAR SEARCH', linearSearch([1,6,2], 2));
