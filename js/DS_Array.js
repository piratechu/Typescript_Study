"use strict";
class NumberArray {
    constructor() {
        this.array = [];
    }
    addElement(element) {
        this.array.push(element);
    }
    insertElement(element, index) {
        if (index < 0 || index > this.array.length) {
            return false;
        }
        this.array.splice(index, 0, element);
        return true;
    }
    deleteElement(index) {
        if (index < 0 || index > this.array.length) {
            return false;
        }
        this.array.splice(index, 1);
        return true;
    }
    findElement(element) {
        return this.array.indexOf(element);
    }
    traverseArray(callback) {
        for (const element of this.array) {
            callback(element);
        }
    }
}
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
