// -----------------------------------------------------------------------------------------
// 04. classes and interfaces
// #4.3 Interfaces part Two
// -----------------------------------------------------------------------------------------

// review
// 추상클래스는 이걸 상속받는 다른 클래스가 가질 property와 메소드를 지정하도록 해줌
// 추상클래스는 인스턴스 생성 불가
// protected는 추상클래스로부터 상속받은 클래스들이 property에 접근하도록 해줌

abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
    // firstName과 lastName은 protected라서 접근 가능한 것. private이면 접근 불가
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// -----------------------------------------------------------------------------------------

// 추상화를 원할 때, 클래스와 인터페이스의 차이점
// 인터페이스는 컴파일하면 자바스크립트로 바뀌지 않고 사라진다.
// 인터페이스는 클래스의 모양을 알려준다.

// 위의 코드를 interface로 바꿔보기

interface IUser {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

// 자바스크립트에도 extends가 있으므로, implements 사용
class IPlayer implements IUser, Human {
  // interface를 상속할 때에는 property를 private으로 만들 수 없다.
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
    // firstName과 lastName은 protected라서 접근 가능한 것. private이면 접근 불가
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// -----------------------------------------------------------------------------------------

// interface를 type으로도 지정 가능 (리턴도 가능)
// argument에 인터페이스를 씀으로써 오브젝트의 모양을 지정해 줄 수 있다.

function makeUser(user: IUser) {
  return "hi";
}

makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
