console.log(a);
setTimeout(() => {
  console.log("b");
}, 0);
console.log("c");

function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

const number = 1;
increase(number, (result) => {
  console.log(result);
});

function increase02(number) {
  //promise를 사용해야 await 사용가능
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("NumberToobig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase02(0)
  .then((number) => {
    console.log(number);
  })
  .catch((e) => {
    console.log(e);
  });

const runTacks = async () => {
  try {
    let result = await increase02(0);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
