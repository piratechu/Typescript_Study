"use strict";
class Queue {
    constructor() {
        this.elements = [];
    }
    enqueue(element) {
        this.elements.push(element);
    }
    dequeue() {
        return this.elements.shift();
    }
    clear() {
        this.elements = [];
    }
    size() {
        return this.elements.length;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    traverseQueue(callback) {
        for (const element of this.elements) {
            callback(element);
        }
    }
}
const queue = new Queue();
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
