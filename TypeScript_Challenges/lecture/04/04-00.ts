// -----------------------------------------------------------------------------------------
// 04. classes and interfaces
// #4.0 Classes
// -----------------------------------------------------------------------------------------

// Typescript에서 class를 생성하는 방법

// 필드를 보호하기 위한 방법(접근제어자))
// : 1. public, 2. private, 3. protected

// private는 Typescript에서만 유효하다.
// javascript로 컴파일 될 때는 사라진다.
// private과 public은 property와 method에서 모두 작동한다.
// private 필드는 인스턴스 밖에서 접근할 수 없고, 다른 자식 클래스에서도 접근할 수 없다.

class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

const nico = new Player("nico", "las", "니꼬");
// nico.firstName
// 'firstName' 속성은 private이며 'Player' 클래스 내에서만 액세스할 수 있습니다.

nico.nickname; // public이기 때문에 error 없이 코드 실행 가능

// -----------------------------------------------------------------------------------------

// abstract class (추상 클래스))
// 다른 클래스가 상속 받을 수 있는 클래스
// 하지만 이 클래스는 직접 새로운 인스턴스를 만들 수는 없다.
// 즉, 추상클래스는 오직 다른 곳에서 상속받을 수만 있는 클래스이다.

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

class PlayerAbstract extends User {}

const nicoAbstract = new PlayerAbstract("nico", "las", "니꼬");
nicoAbstract.nickname;
// const nicoAbstrac1 = new User("nico", "las", "니꼬");
// 추상 클래스의 인스턴스를 만들 수 없다.

// -----------------------------------------------------------------------------------------

// abstract class 내의 method
// abstract method (추상 메소드)

// 추상 메소드는 구현이 되어 있지 않은(코드가 없는) 메소드
// 추상 메소드가 있는 경우, 추상 클래스를 상속받는 클래스에서 추상메소드를 구현해야 한다.
// method : 클래스 안에 존재하는 함수
// 추상 클래스 안에서는 추상 메소드를 만들 수 있다.
// 하지만, 메소드를 구현하지 않고, call signiture만 적어주어야 한다.

abstract class User1 {
  constructor(
    private firstName: string,
    private lastName: string,
    private nickname: string
  ) {}
  abstract getNickName(): void; // method의 call signiture만 가지고 있다.
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
    // User로부터 이 메소드를 상속받았스므로, PlayerAbstract1는 이걸 그냥 사용할 수 있다.
  }
}

class PlayerAbstract1 extends User1 {
  // User1에는 getNickName의 구현체가 없으므로 PlayerAbstract1은 getNickName을 구현해주어야 한다.
  getNickName() {
    // console.log(this.nickname);
    // property를 private로 만들면, 그 클래스를 상속했을지라도 그 property애 접근할 수 없다.
  }
}

const nicoAbstract1 = new PlayerAbstract1("nico", "las", "니꼬");
nicoAbstract1.getFullName();

// -----------------------------------------------------------------------------------------

// protected
// 필드가 외부로부터는 보호되지만, 다른 자식 클래스에서는 사용되기를 원할 때 사용

abstract class User2 {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName1(): void;
  getFullName1() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class PlayerAbstract2 extends User2 {
  getNickName1() {
    console.log(this.nickname); // protected는 자식 클래스에서 사용 가능
  }
}

const nicoAbstract2 = new PlayerAbstract1("nico", "las", "니꼬");
nicoAbstract1.getFullName();

// -----------------------------------------------------------------------------------------
