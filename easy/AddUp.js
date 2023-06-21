function addUp(number) {
  if (number === 1) {
    return 1;
  }
  return number + addUp(number - 1);
}
