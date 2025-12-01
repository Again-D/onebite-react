function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
    // resolve => 성공했을때 함수
    // reject => 실패했을때 함수

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
      // console.log("안녕");
      // // resolve("안녕");
      // reject("왜 실패했는지 이유...");
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);
  return add10(result);
})
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// them 메서드
// -> 그 후에

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// promise chaining
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
