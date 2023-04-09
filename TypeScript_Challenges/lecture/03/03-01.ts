import { type } from "os";
import { config } from "process";

// -----------------------------------------------------------------------------------------
// 03. functions
// 3.1 Overloading
// -----------------------------------------------------------------------------------------

// Overloading
// 오버로딩은 함수가 여러 개의 call signatures를 가지고 있을 때 발생시킨다.
// 즉, 서로 다른 여러 개의 call signatures를 가졌을 때 발생

type Add = (a: number, b: number) => number; // call Signatures
// call Signature를 만드는 가장 간단하고 빠른 지름길 (단축키 같은 것)
const add: Add = (a, b) => a + b;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 다른 call signatures에 파라미터의 타입이 다른 경우

type Add1 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add1: Add1 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};
// 이렇게도 작성 가능하지만, Overloading 때문에 지양

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config);
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(console);
  } else {
    console.log(config.path, config.state);
  }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 다른 call signatures에 파라미터의 갯수가 다른 경우
// 추가 파라미터는 옵션 (선택사항)

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c?: number): number;
};

const add2: Add2 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
// c 파라미터는 옵션같은 것
// a, b만 부를 수도 있고, a, b, c를 부를 수도 있다.

add2(1, 2);
add2(1, 2, 3);
