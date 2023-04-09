import { type } from "os";
// -----------------------------------------------------------------------------------------
// 04. classes and interfaces
// #4.2 Interfaces
// -----------------------------------------------------------------------------------------

// type이 특정 값을 가지도록 하기
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player = {
  nickname: string;
  healthBar: number;
  team: Team;
  health: Health;
};

const nico: Player = {
  nickname: "nico",
  healthBar: 10,
  team: "red",
  health: 5,
};

type Food = string;
const kimchi: Food = "delicious";

// -----------------------------------------------------------------------------------------

// Interfaces : type과 매우 유사
// Interface는 오브젝트의 모양을 특정해 주기 위한 용도 하나로만 사용된다.
// type도 같은 역할을 할 수 있고, interface에 비해 활용할 수 있는게 많다.

interface IPlayer {
  nickname: string;
  healthBar: number;
  team: Team;
  health: Health;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// interface

interface User {
  name: string;
}
interface IPlayer1 extends User {}

const yr: IPlayer1 = {
  name: "yr",
};

// - - - - - - - - - - - - - - - - - - -
// type

type User1 = {
  name: string;
};
type IPlayer2 = User & {};

const yr1: IPlayer2 = {
  name: "yr",
};

// -----------------------------------------------------------------------------------------

// interface는 property들을 축적시킬 수 있다.

interface Profile {
  name: string;
}

interface Profile {
  lastName: string;
}

interface Profile {
  health: number;
}

// interface를 각각 만들어도 타입스크립트가 알아서 하나로 합쳐준다.
// type은 이거 불가능

const kyr: Profile = {
  name: "kyr",
  lastName: "k",
  health: 10,
};
