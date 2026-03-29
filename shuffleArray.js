function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const arrayList = [11, 24, 37, 49, 52];

console.log(shuffleArray(arrayList));

// output: [ 11, 37, 52, 49, 24 ] (everytime diff order)

function shuffleArray2(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(shuffleArray2(arrayList)); //fisher yates

/** output: [ 11, 37, 52, 49, 24 ] (everytime diff order)
 * best for correct,
 * efficient,
 * production ready shuffle
 */
