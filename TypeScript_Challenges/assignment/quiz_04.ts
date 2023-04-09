// -----------------------------------------------------------------------------------------
// Typescript로 블록체인 만들기: From #3.2 to #3.4
// -----------------------------------------------------------------------------------------

// 배열의 마지막 요소를 반환
// javascript

const array = [1, 2, 3, 4, 5, 6];

const lastElement = array[array.length - 1];
console.log(lastElement);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Typescript

const arrayT: number[] = [1, 2, 3, 4, 5, 6];

const lastElementT: number = array[array.length - 1];
console.log(lastElement);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// OR
// javascript

const array1 = [1, 2, 3, 4, 5, 6, 7];

const lastElement1 = array1.slice(-1)[0];
console.log(lastElement1);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Typescript

const array1T: number[] = [1, 2, 3, 4, 5, 6, 7];

const lastElement1T: number = array1.slice(-1)[0];
console.log(lastElement1T);

// -----------------------------------------------------------------------------------------

// prepend(arr, item) : 이 함수는 배열의 시작 부분에 item 을 넣고 return 해야 합니다.
// javascript

function prepend(arr, item) {
  return [item, ...arr];
}

const array2 = [2, 3, 4, 5, "a"];
const newArray = prepend(array2, "b");
console.log(newArray);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Typescript

function prependT<T>(arr: T[], item: T): T[] {
  return [item, ...arr];
}

const array2T: (number | string)[] = [2, 3, 4, 5, "a"];
const newArrayT: (number | string)[] = prepend(array2, "b");
console.log(newArray);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// OR
// javascript

function prepend1(arr, item) {
  arr.unshift(item);
  return arr;
}

const array3 = [3, 4, 5];
const newArray3 = prepend(array3, 2);
console.log(newArray3);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Typescript

function prepend1T<T>(arr: T[], item: T): T[] {
  arr.unshift(item);
  return arr;
}

const array3T: number[] = [3, 4, 5];
const newArray3T: number[] = prepend1(array3, 2);
console.log(newArray3);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
