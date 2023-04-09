// -----------------------------------------------------------------------------------------
// 04. classes and interfaces
// #4.1 Recap
// -----------------------------------------------------------------------------------------

// Dictionary 만들기 - 해싱 알고리즘을 사용한 해시맵

// 제한된 양의 property 혹은 key를 가지는 타입을 정의해주는 방법

// create type
type Words = {
  [key: string]: string;
  // property의 이름은 모르지만, type만을 알고 있을 때 사용한다.
  // Words 타입은 string만을 property로 가지는 오브젝트이다.
};

class Dict {
  // property 만들기
  private words: Words;
  // dictionary 안에서만 words를 볼 수 있다.
  constructor() {
    this.words = {};
    // words를 Initializer 없이 선언하고, 수동으로 초기화
  }

  // class를 type처럼 사용 가능
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      // 주어진 단어가 아직 사전에 존재하지 않을 때
      this.words[word.term] = word.def;
    }
  }

  // term을 이용하여 단어를 불러오는 기능 구현
  def(term: string) {
    return this.words[term];
  }

  // static
  static hello() {
    return "hello";
  }
}

class Word {
  // public이지만 변경 불가능하게 만들기 (값은 보여주지만 수정은 불가능하도록)
  // public -> readonly
  constructor(readonly term: string, readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
Dict.hello();
