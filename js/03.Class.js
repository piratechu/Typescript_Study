"use strict";
class person {
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
    }
    sayHello() {
        console.log("Hello", this.name);
    }
    getName() {
        return this.name;
    }
    getBirth() {
        return this.birth;
    }
}
