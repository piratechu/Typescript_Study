"use strict";
(() => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            return this.name;
        }
        setName(nValue) {
            this.name = nValue;
        }
        getAge() {
            return this.age;
        }
        setAge(nValue) {
            if (nValue >= 0)
                this.age = nValue;
            else
                this.age = 0;
        }
    }
    const p = new Person("孫悟空", 30);
    p.setAge(-30);
})();
