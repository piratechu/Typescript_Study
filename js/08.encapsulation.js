"use strict";
(() => {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        getName() {
            return this._name;
        }
        setName(nValue) {
            this._name = nValue;
        }
        get age() {
            console.log("get age function active!");
            return this._age;
        }
        set age(nValue) {
            console.log("set age function active!");
            this._age = nValue;
        }
    }
    const p = new Person("孫悟空", 30);
})();
