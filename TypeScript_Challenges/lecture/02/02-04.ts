import { type } from "os";

// -----------------------------------------------------------------------------------------
// 02. Overview of TypeScript
// #2.4 Types of TS part Three - unknown, void, never
// -----------------------------------------------------------------------------------------

// unknown
// 변수의 Type을 미리 알지 못할 때 unknown을 사용한다.

let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}
// 그냥 let b = a + 1; 만 하면 어떤 타입인지 모르므로 TypeScript가 에러를 뱉지만,
// 타입에 대한 조건을 걸어주면 잘 작동한다.

if (typeof a === "string") {
  let b = a.toUpperCase();
}

// -----------------------------------------------------------------------------------------

// void
// = 빈 공간
// 아무것도 return 하지 않는 함수를 대상으로 사용한다.
// When a function does not return anything

function hello() {
  console.log("x");
}

function hello1(): void {
  console.log("x");
}
// 보통 void를 따로 지정해 줄 필요는 없다. (써도 되긴 하지만 안써도 된다.)
// TypeScript가 void가 아무것도 return 하지 않는다는 것을 자동으로 인식한다.

// -----------------------------------------------------------------------------------------

// never
// 함수가 절대 return 하지 않을 때 발생한다.
// 예를 들어 함수에서 exception(예외)가 발생할 때

function bye() {
  return "X";
}

// function bye1(): never {
//   return "X";
// }
// type을 never로 지정해주면 동작하지 않음

function bye3(): never {
  throw new Error("xxx");
}
// return 하지 않고 오류를 발생시키는 함수

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// never는 type이 두 가지 일 수도 있는 상황에 발생할 수 있다.

// bye4 함수가 name을 받고 이 함수가 string이거나 number인 경우

function bye4(name: string | number) {
  if (typeof name === "string") {
    name;
    // (parameter) name: string
  } else if (typeof name === "number") {
    name;
    // (parameter) name: number
  } else {
    name;
    // (parameter) name: never
    // TypeScript에게 name은 string이나 number이라고 알려줬고 그 두 타입을 모두 확인해주었기 때문에
    // else에 무엇을 쓰든지 그 type은 never가 된다.
    // 즉, 타입이 올바르게 들어온다면 이 코드는 절대 실행되지 않는다.
  }
}
