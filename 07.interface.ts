(() => {
    //interface 指定義一個結構，不考慮實際值，都是抽象方法
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
