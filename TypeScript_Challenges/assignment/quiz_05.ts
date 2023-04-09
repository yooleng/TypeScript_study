// -----------------------------------------------------------------------------------------
// Typescript로 블록체인 만들기: From #4.0 to #4.1
// dictionary 만들기
// -----------------------------------------------------------------------------------------

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }

  get(term: string) {
    return this.words[term];
  }

  delete(term: string) {
    if (this.words[term]) {
      delete this.words[term];
    }
  }

  update(term: string, def: string) {
    this.words[term] = def;
  }

  showAll() {
    for (const term in this.words) {
      console.log(`${term}: ${this.words[term]}`);
    }
  }

  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const rice = new Word("rice", "한국의 주식");

const dict = new Dict();
dict.add(kimchi);
dict.add(new Word("커피", "카페인"));
console.log(dict.def("kimchi"));

dict.delete("kimchi");
dict.update("kimchi", "한국의 전통음식");
dict.add(kimchi);
console.log(dict.def("kimchi"));
dict.showAll();
console.log(`Total terms in the dictionary: ${dict.count()}`);
