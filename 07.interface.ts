(() => {
    // type myType = {
    //     name: string,
    //     age: number
    // }
    // const obj: myType = { name: "張三", age: 50 };

    //interface 定義一個結構
    // 如果 interface 名稱重複，會將兩個interface 的定義合併
    // interface 不能有初始化值，只能定義抽象結構
    interface myInterface {
        name: string;
        age: number;
    }
    interface myInterface {
        gender: "MALE" | "FEMALE";
        sound(): void;
    }

    // const obj: myInterface = { name: "張三", age: 50, gender: "MALE" };

    // 透過 class 去實作 interface
    class myClass implements myInterface {
        name: string;
        age: number;
        gender: "MALE" | "FEMALE";
        constructor(name: string, age: number, gender: "MALE" | "FEMALE") {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sound(): void {
            console.log(this.name, "bow-wow");
        }
    }

    const myFirst = new myClass("張三", 50, "MALE");
    myFirst.sound();
    // console.log(myFirst.age);
    // console.log(myFirst.gender);
})();
