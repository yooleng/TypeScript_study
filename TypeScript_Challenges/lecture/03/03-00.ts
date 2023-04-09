// -----------------------------------------------------------------------------------------
// 03. functions
// #3.0 Call Signatures
// -----------------------------------------------------------------------------------------

// Call Signatures
// Typescript에게 이 함수가 어떻게 호출되는지 설명해주는 부분
// 함수 이름 위에 커서를 올렸을 때 뜨는 파라미터 타입 정보와 리턴 타입 정보를 말한다.
// 함수를 어떻게 호출해야 하는지와 반환이 어떻게 되는지 알려주는 정보
// (parameter type, return type)

function add(a: number, b: number) {
  return a + b;
}

// 화살표함수
const add1 = (a: number, b: number) => a + b;

// add type 생성
type Add = (a: number, b: number) => number;
// call Signature를 만드는 가장 간단하고 빠른 지름길 (단축키 같은 것)
const add2: Add = (a, b) => a + b;
// 위의 타입 Add에서 a와 b의 타입을 정해주었기 때문에 add2에서는 안써도 됨

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

type Add1 = {
  (a: number, b: number): number;
};
// 이렇게도 작성 가능하지만, Overloading 때문에 지양
// 03-01 Overloading 참고
