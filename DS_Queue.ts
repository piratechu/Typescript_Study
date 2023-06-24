class Queue<T> {
    private elements: T[];
    constructor() {
        this.elements = [];
    }

    //將元素添加到陣列的尾端
    enqueue(element: T): void {
        this.elements.push(element);
    }

    //將元素移出佇列的頭端並返回
    dequeue(): T | undefined {
        return this.elements.shift();
    }

    //清空佇列
    clear(): void {
        this.elements = [];
    }

    //取得佇列中的元素個數
    size(): number {
        return this.elements.length;
    }

    //檢查佇列是否為空
    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    //取得佇列內容
    traverseQueue(callback: (element: T) => void): void {
        for (const element of this.elements) {
            callback(element);
        }
    }
}

// 使用範例
const queue = new Queue<number>();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.traverseQueue((element) => console.log(element));

console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.dequeue());
queue.traverseQueue((element) => console.log(element));

queue.clear();
queue.traverseQueue((element) => console.log(element));
console.log(queue.size());
console.log(queue.isEmpty());
