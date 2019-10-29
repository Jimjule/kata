function sumTwoSmallestNumbers(numbers) {
  order = numbers.sort((a, b) => a - b);
  return order[0] + order[1]
}
