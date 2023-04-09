// -----------------------------------------------------------------------------------------
// 03. functions
// #3.4 Conclusions
// -----------------------------------------------------------------------------------------

// generic을 사용하는 다른 경우
// generic을 사용하여 type을 생성할 수도 있지만, type을 확장도 가능, 코드 저장도 가능

function superPrint<T>(a: T[]) {
  return a[0];
} // 이렇게 사용도 가능

type Player<E> = {
  name: String;
  extraInfo: E;
};

const yoorae: Player<{ favfood: String }> = {
  name: "yoorae",
  extraInfo: {
    favfood: "kimchi",
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// type을 생성하고 그 type을 또 다른 type에 넣어서 사용 가능
// 얼마든지 확장 가능하다.

type Player1<F> = {
  name: String;
  extraInfo: F;
};

type YooraePlayer = Player1<{ favfood: String }>;

const yoorae1: YooraePlayer = {
  name: "yoorae",
  extraInfo: {
    favfood: "kimchi",
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

type Player2<G> = {
  name: String;
  extraInfo: G;
};

type YooraeExtra = {
  favfood: string;
};
type YooraePlayer1 = Player2<YooraeExtra>;

const yoorae2: YooraePlayer1 = {
  name: "yoorae",
  extraInfo: {
    favfood: "kimchi",
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 이렇게 type들을 재사용할 수 있다.

const benny: Player2<null> = {
  name: "benn",
  extraInfo: null,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

type A = Array<number>;

let aa: A = [1, 2, 3, 4];

function printAllNumbers1(arr: number[]) {}
function printAllNumbers2(arr: Array<number>) {}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// React.js에서 type 사용할 때 이런식으로 사용 가능
// 아래처럼 generic을 보내면, useState의 call signiture가 number 타입의 useState가 된다.

// useState<number>();
