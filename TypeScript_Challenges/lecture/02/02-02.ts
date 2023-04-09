import { type } from "os";

// -----------------------------------------------------------------------------------------
// 02. Overview of TypeScript
// #2.2 Types of TS part One - object Type을 명시적으로 정해주는 방법
// -----------------------------------------------------------------------------------------

// let  변수 : type = ~
let a: number = 1;
let b: string = "il";
let c: boolean = true;

let d: number[] = [1, 2];
let e: string[] = ["il", "1"];
let f: boolean[] = [true];

const player: {
  name: string;
  age?: number;
  // ? : optional
} = {
  name: "nico",
};

if (player.age && player.age < 10) {
}

// -----------------------------------------------------------------------------------------

// Type Aliases
// 똑같은 타입을 한 번 이상 재사용하거나 또 다른 이름으로 부르고 싶은 경우 사용
// 모든 타입에 대하여 새로운 이름을 부여할 수 있다.
// 즉, 타입을 위한 이름을 제공한다.
// 중복된 코드가 많을 때 Alias(별칭) 타입 생성 가능

// const playerNico : {
//   name: string,
//   age?: number
// } = {
//   name : "nico"
// }

// const playerLynn : {
//   name: string,
//   age?: number
// } = {
//   name : "Lynn",
//   age: 12
// }

// Alias 생성
type Player = {
  name: string;
  age?: number;
};

const nico: Player = {
  name: "nico",
};

const lynn: Player = {
  name: "Lynn",
  age: 12,
};

// 과하게 생성하는 것은 지양하는게 좋지만, 이렇게도 가능
type Name = string;
type Age = number;
type Player1 = {
  name: Name;
  age?: Age;
};

// -----------------------------------------------------------------------------------------

// 함수의 return값의 타입을 지정하는 방법
// let, const와 마찬가지로 argument의 타입을 지정

function playerMaker(name: string) {
  return {
    name: name,
  };
}
const yoorae = playerMaker("yoorae");
// yoorae.age = 12
// playerMaker는 string인 name이라는 요소만 있는 object를 return하고 있으므로 오류

// 그렇다면 함수가 return하는 것의 타입을 지정하는 방법은?
function playerMaker1(name: string): Player {
  return {
    name: name,
  };
}
const yoorae1 = playerMaker1("yoorae1");
yoorae1.age = 12;
// 위처럼 함수의 타입을 Player로 지정해주면, Typescript는 이제 mike1이 Player 타입이라는 것을 안다.
// 따라서 age를 추가해도 오류가 발생하지 않는다.

// -----------------------------------------------------------------------------------------

// 화살표함수로 return값의 타입을 지정하는 방법

const playerMaker2 = (name: string): Player => ({ name });

const yoorae2 = playerMaker2("yoorae2");
yoorae2.age = 12;
