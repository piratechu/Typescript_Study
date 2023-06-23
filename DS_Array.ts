/*
    https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容

*/
class NumberArray {
    private array: number[];
    constructor() {
        this.array = [];
    }

    // 新增元素到陣列尾端
    addElement(element: number): void {
        this.array.push(element);
    }

    //插入元素到指定索引位置
    insertElement(element: number, index: number): boolean {
        if (index < 0 || index > this.array.length) {
            return false;
        }
        this.array.splice(index, 0, element);
        return true;
    }

    //刪除指定索引位置元素
    deleteElement(index: number): boolean {
        if (index < 0 || index > this.array.length) {
            return false;
        }
        this.array.splice(index, 1);
        return true;
    }

    //查找元素的索引，如果找不到則返回-1
    findElement(element: number): number {
        return this.array.indexOf(element);
    }

    // 遍歷陣列並執行指定的操作
    traverseArray(callback: (element: number) => void): void {
        for (const element of this.array) {
            callback(element);
        }
    }
}

// 使用範例
const numbers = new NumberArray();

numbers.addElement(5);
numbers.addElement(10);
numbers.addElement(20);
console.log(numbers);

numbers.insertElement(30, 1);
console.log(numbers);

numbers.deleteElement(2);
console.log(numbers);

numbers.traverseArray((element) => console.log(element));
