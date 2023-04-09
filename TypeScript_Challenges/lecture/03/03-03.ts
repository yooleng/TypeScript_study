// -----------------------------------------------------------------------------------------
// 03. functions
// #3.3 Generics Recap
// -----------------------------------------------------------------------------------------

// generic을 추가하고 싶을 때?
// Typescript는 generic을 처음 인식했을 때와 generic의 순서를 기반으로 generic의 type을 파악한다.

type SuperPrintGeneric = <T, M>(a: T[], b: M) => T;

const superPrintGeneric: SuperPrintGeneric = (a) => a[0];

const a = superPrintGeneric([1, 2, 3, 4], "x");
const b = superPrintGeneric([true, false, true], 1);
const c = superPrintGeneric(["1", "2", "3"], 3);
const d = superPrintGeneric([1, 2, true, "abc"], []);
