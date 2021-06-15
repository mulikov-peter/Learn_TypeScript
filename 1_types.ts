// Boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

// Number
const int: number = 4;
const float: number = 4.2;
const num: number = 3e10;

// String
const message: string = 'Hello Typescript';

//
const numberArray: number[] = [1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 2, 3, 5, 8, 13];

const words: string[] = ['JS', 'TypScript'];

// Tuple
const contact: [string, number] = ['Adam', 12345];

// Any
let variableLet: any = 42;
variableLet = 'New String';

// Functions
function sayName(name: string): void {
  console.log(name);
}
sayName('Peter');

// Never
function throwError(message: string): never {
  throw new Error(message);
}

// Own Types
type Login = string;
const login: Login = 'admin';
// const login2: Login = 42 // Error

type ID = string | number;
const id1: ID = 12345;
const id2: ID = '12345';
// const id3: ID = true // Error

type SomeType = string | null | undefined;
