import { type } from "os";

// -----------------------------------------------------------------------------------------
// 02. Overview of TypeScript
// #2.3 Types of TS part Two - readonly, Tuple, any
// -----------------------------------------------------------------------------------------

// readonly 속성 추가 가능 -> 요소들을 '읽기 전용'으로 만들 수 있다.

type Name = string;
type Age = number;
type Player = {
  readonly name: Name;
  age?: Age;
};

const playerMaker = (name: string): Player => ({ name });

const yoorae = playerMaker("yoorae");
yoorae.age = 12;
// yoorae.name = Kim;
// Player의 name을 수정하려고 시도하면 Typescript가 막는다. -> readonly

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1)
// 마찬가지로 수정 불가

const numbers1: number[] = [1, 2, 3, 4];
numbers1.push(1);
// readonly 속성을 제거하면 잘 작동하는 것을 확인할 수 있다.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const names: readonly string[] = ["1", "2", "3", "4"];
// names.push("5")
// string도 수정 불가
// map이나 filter처럼 array을 변경하지 않는 것은 사용 가능

// -----------------------------------------------------------------------------------------

// Tuple
// 명시적으로 지정된 타입의 고정된 배열 형태
// Tuple은 array를 생성할 수 있게 하는데, 최소한의 길이를 가져야 하고, 특정 위치에 특정 타입이 있어야 한다.
// 정해진 갯수의 요소를 가져야하는 array를 지정할 수 있다.
// 또한 원하는 순서에 맞는 타입을 지정할 수 있다.

["nico", 12, false]; // string, number, boolean
const player: [string, number, boolean] = ["nico", 12, false];
// player[0] = 1
// 첫번째 index는 string이어야 하므로 오류 발생
player[0] = "1";
// string으로는 잘 변경된다.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const player1: readonly [string, number, boolean] = ["nico", 12, false];
// player1[0] = "1";
// readonly 속성을 추가하면 마찬가지로 변경 불가능하다.

// -----------------------------------------------------------------------------------------

// undefined , null

let a: undefined = undefined;
let b: null = null;

// -----------------------------------------------------------------------------------------

// any
// any는 Typescript로부터 빠져나오고 싶을 때 쓰는 타입
// Typescript의 모든 것을 비활성화 시킨다.
// 말 그대로 아무 타입이나 될 수 있다.
// any를 시용하면 Typescript의 보호를 받지 못하고 javsscript 코드가 된다.
// 되도록이면 사용 지양

const c: any[] = [1, 2, 3, 4];
const d: any = true;
c + d;
// 위와 같이 any를 사용하면 이런 코드도 실행이 된다.

const e = [1, 2, 3, 4];
const f = true;
// e + f;
// any를 빼면 Typescript는 허용하지 않음
