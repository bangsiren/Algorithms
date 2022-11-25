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
  for (let i = 2; i <= n; i++) {
    if (n < 2) {
      number = 1
    } else {
      number = number * i
    }
  }
  return number;
}
console.log(fact(5));

// == PRIME NUMBER == /

const isPrime = (n) => {
  let number = true;
  if (n < 2) {
    return !number
  } else if (n % 2 == 0) {
    return !number
  } else {
    return number
  }
}
console.log(isPrime(5));

//== RANGE OF PRIME NUMBER ==//

const prime = (n) => {
  let primeNumber = []
  let result;
  for (let i = 2; i < n; i++) {
    if (i % 2 != 0) {
      result = primeNumber.push(i);
    }
  }
  return primeNumber;
}
console.log(prime(100));

//== ODD NUMBER OR EVENT NUMBER ==//
let oddOrEventNum = (n) => {
  if (n % 2 == 0) {
    return 'number is Event'
  } else {
    return 'number is Odd'
  }
}
console.log(oddOrEventNum(2));

//==RANGE ODD NUMBER ==//
const oddNums = (n) => {
  let primeNumber = []
  let event;
  let odd
  for (let i = 2; i < n; i++) {
    if (i % 2 != 0) {
      odd = primeNumber.push(i)
    }
  }
  return primeNumber;
}

console.log('Odd Number ', oddNums(10))

// == LINEAR SEARCH == //
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1
}
console.log('LINEAR SEARCH', linearSearch([1, 6, 2], 2));

// == BINARY SEARCH  == //

let binarySearch = (arr, target) => {
  let leftSide = 0;
  let rightSide = arr.length - 1;
  while (leftSide <= rightSide) {
    let middle = Math.floor((leftSide + rightSide) / 2)
    if (target === arr[middle]) {
      return middle
    }
    if (target < arr[middle]) {
      rightSide = middle - 1
    } else {
      leftSide = middle + 1
    }
  }
  return -1;
}

console.log('Binary search', binarySearch([-5, 2, 4, 6, 10], 10));
console.log('Binary search', binarySearch([-10, -1, 3, 5, 7, 14], -10));
console.log('Binary search', binarySearch([-10, -3, 1, 3, 5, 7, 14], 20));


// == BINARY SEARCH USING RECURSIVE FUNCTION == //
let binarySearchRecur = (arr, target) => {
  return search(arr, target, 0, arr.length - 1)
}

let search = (arr, target, l, r) => {
  if (l > r) {
    return -1
  }
  let middleIndex = Math.floor((l + r) / 2);
  if (arr[middleIndex] === target) {
    return middleIndex
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, l, middleIndex - 1)
  } else {
    return search(arr, target, middleIndex + 1, r)
  }
}

console.log('Binary search Recur', binarySearchRecur([-5, 2, 4, 6, 10], 10));
console.log('Binary search Recur', binarySearchRecur([-10, -1, 3, 5, 7, 14], -10));
console.log('Binary search Recur', binarySearchRecur([-10, -3, 1, 3, 5, 7, 14], 20));

// == SORTING ALGORITHMS == //

// == BUBLE SORT == //
function bubleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}
console.log('Buble Sort', bubleSort([20, 200, -20, 0, .2, 10, 1, 100, -10, 10, 2, 20]));


// == QUICKSORT == //


let quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
};
let ar = [8, 20, -2, 4, -6]
console.log('Quick Sort',quickSort(ar));

