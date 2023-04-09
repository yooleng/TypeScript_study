import { type } from "os";
// -----------------------------------------------------------------------------------------
// 03. functions
// #3.2 Polymorphism
// -----------------------------------------------------------------------------------------

// Polymorphism (다형성) : 여러가지 다양한 형태

// 배열을 받고, 그 배열의 요소를 하나씩 print해주는 함수를 만든다.

type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};
// 위의 type은 Concrete type(number,boolean,string,void,unknown 등)이 아니다.
// 이런식으로 하면 경우의 수에 맞는 모든 call signiture을 다 만들어두어야 한다.

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => {
    console.log(i);
  });
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["1", "2", "3"]);
// superPrint([1, 2, true, "abc"]);

// -----------------------------------------------------------------------------------------

// generic (type의 placeholder)
// call signiture을 작성할 때, 여기 들어올 타입을 확실히 모를 때 사용
// Typescript가 알아서 함수의 call signiture를 만들어준다.
// 즉, generic이란 내가 요구한 대로 call signiture를 생성해줄 수 있는 도구!
// generic을 사용하기 위해서는 먼저 Typescript에게 알려주어야 한다. -> <>
// <> 안에 원하는 이름 지정, 보통 T, V가 많다.

type SuperPrintGeneric = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrintGeneric: SuperPrintGeneric = (arr) => {
  arr.forEach((i) => {
    console.log(i);
  });
};

superPrintGeneric([1, 2, 3, 4]);
superPrintGeneric([true, false, true]);
superPrintGeneric(["1", "2", "3"]);
superPrintGeneric([1, 2, true, "abc"]);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

type SuperPrintGeneric1 = {
  <TypePlaceholder1>(arr: TypePlaceholder1[]): TypePlaceholder1;
  // <T>(arr: T[]) : T
  // 이러면 일일이 지정해주지 않아도 Typescript가 알아서 type을 유추함!!
};

const superPrintGeneric1: SuperPrintGeneric1 = (arr) => arr[0];

const a = superPrintGeneric1([1, 2, 3, 4]);
const b = superPrintGeneric1([true, false, true]);
const c = superPrintGeneric1(["1", "2", "3"]);
const d = superPrintGeneric1([1, 2, true, "abc"]);
