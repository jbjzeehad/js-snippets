const numbers = [23, 45, 67, 34, 67, 8, 99, 12, 57, 45, 89, 30];

const maxNumber = Math.max(...numbers);

console.log(maxNumber);

// output: 99 (small/medium data)

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);

// output : 99 (large data / production)

if (numbers.length === 0) {
  console.log("Data not found");
} else {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
}

console.log(max);

/**  output: 99
 * (error prevention
 * input validation
 * defensive coding)
 */
