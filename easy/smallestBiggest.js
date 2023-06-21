function minMax(array) {
  let results = [array[0], array[0]];
  for (let number of array) {
    if (number < results[0]) {
      results[0] = number;
    }
    if (number > results[1]) {
      results[1] = number;
    }
  }
  return results;
}
