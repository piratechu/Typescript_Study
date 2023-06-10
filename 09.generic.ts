(() => {
    // 定義一個函數或者變量
    // function fn(a: number): number {
    //     return a;
    // }
    // 當我們在定義函數或者類，不確定類型就使用泛型
    function fn1<T>(a: T): T {
        return a;
    }
    // 使用 ts 自動推斷
    fn1("Hello");
    // 推斷錯誤可以指定泛型的類型
    fn1<number>(3);

    //多泛型定義
    function fn2<T, K>(a: T, b: K): T {
        console.log(b);
        return a;
    }

    // 使用 interface 定義泛型
    interface inter {
        length: number;
    }
    // T extends inter 表示泛型T必須實現 inter 的內容
    function fn3<T extends inter>(a: T): number {
        return a.length;
    }
    // 要傳入有 length 屬性
    fn3("hello");

    //class 泛型
    class myClass<T> {
        name: T;
        constructor(name: T) {
            this.name = name;
        }
    }
    const mc = new myClass("豬八戒");
})();
