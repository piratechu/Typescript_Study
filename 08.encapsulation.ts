(() => {
    // 定義一個類
    class Person {
        // 屬性前面添加修飾符
        /*
        public : 可以在任意位置被訪問(修改)，默認值
        private : 私有屬性，只能在 class 內部被訪問(修改)
            - 在 class 內添加方法，取得私有屬性的訪問(修改)
            這樣在設計類的時候可以定義哪屬性可以被訪問(修改)
        protected 受保護屬性，只能在當前類及子類中使用
        */

        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        //設置 get/set 方法，訪問類的屬性
        getName(): string {
            return this._name;
        }
        setName(nValue: string): void {
            this._name = nValue;
        }

        // getAge(): number {
        //     return this.age;
        // }
        // setAge(nValue: number): void {
        //     // 屬性變更就可以被物件所控制
        //     if (nValue >= 0) this.age = nValue;
        //     else this.age = 0;
        // }

        // ts 中 getter方法的寫法
        get age(): number {
            console.log("get age function active!");
            return this._age;
        }
        set age(nValue: number) {
            console.log("set age function active!");
            this._age = nValue;
        }
    }
    const p = new Person("孫悟空", 30);
    // 屬性可以被任意修改，將會導致數據變得非常不安全(public)
    // 如果改用 ts 的 getter / setter 寫法，當使用物件的
    // 設定或者讀取，都會呼叫物件的 get / set 的方法

    // p.name = "豬扒";
    // p.age = 10;
    // console.log(p.getName, p.getAge);
    // p.setAge(-30);
})();
