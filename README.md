
<img src="https://user-images.githubusercontent.com/76584961/213872765-e37b6c8b-5092-46fa-ae21-f595bddafcc2.png" alt="프로그래머스"  style="width: 100%;"/>

# 알고리즘

- 🔗
  [프로그래머스](https://school.programmers.co.kr/learn/challenges?order=recent&page=1&levels=0&languages=javascript)
- 🔗 [백준](https://www.acmicpc.net/step)
- [백준 입출력 템플릿 모음](백준/README.md)

## 구조
```
📦백준
 ┣ 📂Bronze
 ┃ ┣ 📂0000. 문제 이름
 ┃ ┃ ┣ 📜README.md
 ┃ ┃ ┗ 📜문제 이름.js
 📦프로그래머스
 ┣ 📂lv1
 ┃ ┣ 📂0000. 문제 이름
 ┃ ┃ ┣ 📜README.md
 ┃ ┃ ┗ 📜문제 이름.js
 ┗ 📜README.md
```

## Commit Convention

```bash
git add .
git commit -m "feat: {문제번호} 풀이 추가"
git commit -m "docs: README 파일 수정"
git commit -m "style: 폴더구조 개선"
git commit -m "chore: 코드 오탈자 사소한 수정"
git commit -m "fix: solution 코드 오류 수정"
```

## 프로그래머스 기본 템플릿

```javascript
let arg = '';
function solution(n) {
  let answer = 0;
  return answer;
}
console.log(solution(arg));
```
