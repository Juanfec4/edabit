function matchHouses(step) {
  if (step === 0) {
    return 0;
  }
  return step * 6 - (step - 1);
}
