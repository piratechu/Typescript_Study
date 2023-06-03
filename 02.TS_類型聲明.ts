// 變量聲明需要指定類型
// let 變量:類型
let msg: string;
// let 變量:類型 = 值
let work: string = "Code man";
// 如果變量聲明和賦值同時進行，TS可以自動對變量進行類型檢測
let flag: boolean = true;

// function定義
function sum(a: number, b: number) {
    return a + b;
}

// 返回值設定
function sumReturn(a: number, b: number): number {
    return a + b;
}

// 可以使用 | 來連接多各類型
let b: "male" | "female";

//any，變量任意類型，不指定就是 any
let c: any;

//unknow，未知類型的值，不能賦值給其他變量
let d: unknown;
//unknow 要賦值給其他變量需要定義 unknow 變量的類型
let tmp: string;
tmp = d as string;
tmp = <string>d;

// void 用來表示為空，函數為例，表示沒有返回值
function fn(): void {
    console.log("");
}

//never 表示永遠部會返回結果
function fn2(): never {
    throw new Error("Error throw");
}

//object 表示一個物件
//語法 : {屬性名:屬性值,屬性名:屬性值,...}
let user: { name: string; age: number; transportation: string };
user = { name: "唐三藏", age: 18, transportation: "Hourse" };

//如果屬性是可選擇性的，必續使用 ?.
//類似ES11（2020）optional chaining(可選鍊)
let school: { name: string; start?: number };
school = { name: "哈佛" };

//定義主要屬性後，其他屬性隨意定義
let car: { brand: string; [propName: string]: any };
car = { brand: "BMW", year: 2023, capacity: 1800 };

//可以用箭頭函數的方式聲明函數結構類型
// (參數名:類型,參數名:類型 ...) => 返回值
let fnMultiple: (a: number, b: number) => number; //類型聲明
fnMultiple = function (n1, n2) {
    return n1 * n2;
};

//陣列(數組)
//要表明數組類型
let str: string[];
let num: number[];
//另外聲明方式
let g: Array<number>;
let f: Array<string>;

//tuple，元組，就是固定長度 array
// [類型,類型...]
let h: [string, string];
h = ["hello", "TS"];

//enum 列舉
enum Gender {
    Male = 0,
    Female = 1,
}

let info: { name: string; gender: Gender };

//type alias 型別別名
type StringOrNum = string | number;

let id: StringOrNum = "123";
let zip: StringOrNum = 324;
