// -----------------------------------------------------------------------------------------
// 04. classes and interfaces
// #4.5 Polymorphism
// -----------------------------------------------------------------------------------------

// Polymorphism(다형성) : 다른 모양의 코드를 가질 수 있게 해 주는 것
// -> 제네릭 사용 (placeholder 타입을 쓸 수 있도록 해줌)

interface IStorage<T> {
  // Storage: typescript에 의해 이미 선언된 javascript의 웹 스토리지 API를 위한 인터페이스
  [key: string]: T;
}

// 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에, 인터페이스는 제네릭을 사용한다.
class LocalStorage<T> {
  private storage: IStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get("key");
stringStorage.set("hello", "how are you");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("key");
booleanStorage.set("hello", true);
