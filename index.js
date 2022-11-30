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
console.log('Quick Sort', quickSort(ar));

// ==  MERGE SORT == //

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor((arr.length) / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

let merge = (leftArr, rightArr) => {
  let sortedArr = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr]
}
let arr = [8, 20, -2, 4, -6]
console.log('Merge Sort', mergeSort(arr));

// == CARTESIAN PRODUCTS == //
let cartesianProduct = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]])
    }
  }
  return result
}
console.log('CARTESIAN', cartesianProduct([1, 2], [5, 3, 4]));

// == CLIMBING STAIRECASE EITHER ONE OR TWO STEPS AT A TIME   == //

const climbingStairecase = (n) => {
  const noOfWays = [1, 2]
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
  }
  return noOfWays[n - 1]
}
console.log("CLIMBING STAIRES", climbingStairecase(1))
console.log("CLIMBING STAIRES", climbingStairecase(2))
console.log("CLIMBING STAIRES", climbingStairecase(3))
console.log("CLIMBING STAIRES", climbingStairecase(4))
console.log("CLIMBING STAIRES", climbingStairecase(5))
console.log("CLIMBING STAIRES", climbingStairecase(5))
console.log("CLIMBING STAIRES", climbingStairecase(6))


// == STACK  == //
class Stack {
  constructor() {
    this.items = [];
  }
  push(el) {
    this.items.push(el)
  }
  pop(){
    return this.items.pop()
  }
  size() {
   return this.items.length;
  }
  peek() {
    return this.items[this.items.length -1 ]
  }
  isEmpty(){
    return this.items.length === 0
  }

  print(){
    console.log(this.items.toString())
  }
}

console.log("STACK ")
const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.size());
stack.print()
console.log(stack.pop())
console.log(stack.peek());
console.log(stack.isEmpty());


// == QUEUE DATA STRUCTURE == //

// class Queue {

//   constructor() {
//     this.items = [];

//   }
//   enqueue(el){
//     this.items.push(el)
//   }
//   dequeue(el){
//     return this.items.shift()
//   }
//   size() {
//     return this.items.length
//   };
//   isEmpty() {
//     return this.items.length ===0
//   }
//   peek() {
//     if(!this.isEmpty()) {
//       return this.items[0]
//     } 
//     return null
//   }
//   print(){
//     console.log(this.items.toString())
//   }
// }
// console.log('QUEUE');
// const queue = new Queue()
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.print()
// console.log(queue.isEmpty());
// queue.dequeue();
// queue.print()
// queue.enqueue();

// queue.peek();
// console.log(queue.size())
// queue.size();

// queue.enqueue()


class Queue {
  constructor(){
    this.items = []
    this.rear = 0;
    this.front = 0;

  }
  enqueue(el){
    this.items[this.rear] = el;
    this.rear++
  };
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front ++ 
    return item;
  };
  isEmpty(){
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front]
  }
  size() {
    return this.rear - this.front
  };
  print(){
    console.log(this.items)
  }
}
console.log('SECOND QUEUE')
const que = new   Queue()
console.log(que.isEmpty())
que.enqueue(40)
que.enqueue(50)
que.enqueue(60)
que.enqueue(70)
console.log(que.print())
console.log(que.dequeue());
console.log(que.peek())