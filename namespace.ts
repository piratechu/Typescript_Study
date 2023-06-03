//單文件命名空間定義
namespace A {
    // 如果要被外部呼叫，必須使用 export 出去，這樣才可以調用
    export function test(str: string): void {
        console.log("[Exception]", str);
    }
}

A.test("Java output");
