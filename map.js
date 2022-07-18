//map 함수 : 배열을 수정해서 새로운 배열을 만들때 사용
const map = (callback) => {
  const array = [];
  //callback 함수
  //this

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i]);
    // > 11, 12, 13
    array.push(result);
  }

  return array;
};

const arr = [1, 2, 3];

const callback = (e, i) => {
  console.log(e);
  return e + 10;
};

const newArr = arr.map(callback);
