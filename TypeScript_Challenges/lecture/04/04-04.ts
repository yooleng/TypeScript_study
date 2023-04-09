// -----------------------------------------------------------------------------------------
// 04. classes and interfaces
// #4.4 Recap
// -----------------------------------------------------------------------------------------

// type vs interfaces

// interface : 클래스에 원하는 메소드와 property를 가지도록 강제할 수 있다.
// -> 추상클래스와 비슷하지만, 자바스크립트로 컴파일되지 않는다.

// type 사용하기
// 1. 오브젝트의 모양 설명하기
// 2. 타입 alias 만들기
// 3. 타입을 특정된 값으로 만들기

// 권장 : 클래스나 오브젝트의 모양을 정의하고 싶으면 interface 사용
// 다른 모든 경우에서는 type 사용

// -----------------------------------------------------------------------------------------

// 오브젝트의 모양을 설명할 때 type과 interfaces의 차이
// 둘의 목표는 같지만, 사용 범위가 다름

// type
type Player = {
  name: string;
};

// type 상속
type PlayerAA = PlayerA & {
  lastName: string;
};

const PlayerA: PlayerAA = {
  name: "nico",
  lastName: "las",
};

// - - - - - - - - - - - - - - - - - - - - - - - -

// interface
interface PlayerB {
  name: string;
}

// interface 상속
interface PlayerBB extends PlayerB {
  lastName: string;
}

// property 축적 가능
interface PlayerBB {
  health: number;
}

const PlayerB: PlayerBB = {
  name: "nico",
  lastName: "las",
  health: 5,
};
