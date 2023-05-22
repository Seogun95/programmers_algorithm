function solution(numbers) {
  let result = [];

  numbers.forEach(number => {
    result.push(number * 2);
  });
  return result;
}
