# Beakjoon 입력 템플릿

[출처 : 소쿠리 (입력 템플릿 관련 블로그)](https://velog.io/@imysh578/%EB%B0%B1%EC%A4%80-NodeJsJavascript-%EC%9E%85%EB%A0%A5%EA%B0%92-%EB%B0%9B%EB%8A%94-%EB%B0%A9%EB%B2%95)

![](baekjun.png)

## 입력값 받기

값들은 텍스트 파일 형태로도 주어진다. 우리는 이 파일을 `fs` 모듈로 받아야 한다.
(입력 파일의 경로는`"/dev/stdin"`)

아래 코드는 `linux`일때(백준)는 `/dev/stdin` 파일 경로를 받아오고, 그게 아니라면
`vscode`등에서의 파일경로를 받아온다.

```javascript
const filePath = process.platform === 'linux' ? '/dev/stdin' : './파일경로';
```

만약 `filePath` 변수를 사용하려면 변수 아래에 원하는 입력값 변수를 선택해 넣어주
면 된다.

---

### 01\. 입력값이 한 개 일 때 (한 줄)

- 기본 input 변수

```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
```

- filePath 사용

```javascript
const input = require('fs').readFileSync(filePath).toString().trim();
```

- 입력 예시

```javascript
110;
```

---

### 02\. 입력값이 여러 개 일 때 (한 줄에 공백으로 구분)

- 기본 input 변수

```javascript
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');
```

- filePath 사용

```javascript
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');
```

- 입력 예시

```javascript
110 78 158
```

---

### 03\. 입력값이 여러 줄 일 때

- 기본 input 변수

```javascript
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
```

- filePath 사용

```javascript
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
```

- 입력 예시

```javascript
110;
78;
158;
```

---

### 04\. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때

- 기본 input 변수

```javascript
const [n, input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const inputArr = input.trim().split(' ');
```

- filePath 사용

```javascript
const [n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const inputArr = input.trim().split(' ');
```

- 입력 예시

```javascript
3
110 78 158
```

---

### 05\. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때

- 기본 input 변수

```javascript
const [n, input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
```

- filePath 사용

```javascript
const [n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
```

- 입력 예시

```javascript
3;
110;
78;
158;
```
