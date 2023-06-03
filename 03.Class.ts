// class 通常應該包含屬性、方法
class person {
    //如果直接定義屬性就通過 new 去創建後取得
    // name: string = '小李';
    // age: number = 18;
    // new 創建出來的物件，可以讀寫，如果使用 readyonly 屬性，就只能讀
    // readyonly name: string
    // 靜態屬性就是不用使用 new 創建 class 就可以訪問
    // 使用關鍵字 static
    // static age = 18;
    name: string;
    birth: string;

    // 建立構造函數的方式，new 的時候會被呼叫，this 指的就是當前創建的物件
    constructor(name: string, birth: string) {
        this.name = name;
        this.birth = birth;
    }
    // 方法
    sayHello() {
        console.log("Hello", this.name);
    }
    getName(): string {
        return this.name;
    }

    getBirth(): string {
        return this.birth;
    }
}
