// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// ES Module 방식
// export { add, sub };

// CJS (Common JS) 방식
// module.exports = {
//   add,
//   sub,
// };
