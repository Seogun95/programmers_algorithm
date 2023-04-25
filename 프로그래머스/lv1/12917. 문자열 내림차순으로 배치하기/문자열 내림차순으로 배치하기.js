let a = 'FeazdEf';
let b = 'Zbcdefg';

const solution = s => {
  return s
    .split('')
    .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
    .join('');
};

const results = [a, b].map(n => solution(n));
console.log(results);
