let a = 10;
let b = 12;

const solution = n => {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
};

const results = [a, b].map(n => solution(n));

console.log('results ---->', results);

// -----------

const solution2 = (n, x = 1) => {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
};

const results2 = [a, b].map(n => solution(n));

console.log('results2 =====> ', results2);
