// 1. Counting Sheep

function countSheep(num) {
  // base case
  if (num === 0) 
    return 'All sheep have jumped over the fence';
  
  // General case
  return `${num}: Another sheep jumps over the fence\n${countSheep(num - 1)}`;
}

// console.log(countSheep(10));

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return 'exponent should be >= 0';
  }

  if (exponent === 0) {
    return 1;
  }

  return base * powerCalculator(base, (exponent - 1));
}

// console.log(powerCalculator(3, 3)); // 27
// console.log(powerCalculator(3, -2)); // exponent should be >= 0
// console.log(powerCalculator(5, 5)); // 3,125

function reverseStr(string) {
  if (string.length === 0) {
    return '';
  }

  return string[string.length - 1] + reverseStr(string.slice(0, -1));
}

console.log(reverseStr('hello')); // olleh
console.log(reverseStr('daniel')); // lienad
console.log(reverseStr('renfro')); // orfner