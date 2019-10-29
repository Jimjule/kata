function sumTwoSmallestNumbers(numbers) {
  order = numbers.sort(function(a,b){return a-b});
  return order[0] + order[1]
}
