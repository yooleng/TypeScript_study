// // 배열의 마지막 요소를 반환

// const array = [1, 2, 3, 4, 5, 6];

// const lastElement = array[array.length - 1];
// console.log(lastElement);

// //

// const array1 = [1, 2, 3, 4, 5, 6, 7];

// const last = array1.slice(-1)[0];
// console.log(last);

// // -----------------------------------------------------------------------------------------

// // prepend(arr, item) : 이 함수는 배열의 시작 부분에 item 을 넣고 return 해야 합니다.

// function prepend(arr, item) {
//   return [item, ...arr];
// }

// const array2 = [2, 3, 4, 5, "a"];
// const newArray = prepend(array2, "b");
// console.log(newArray);

// //

// function prepend1(arr, item) {
//   arr.unshift(item);
//   return arr;
// }

// const array3 = [3, 4, 5];
// const newArray3 = prepend(array3, 2);
// console.log(newArray3);
