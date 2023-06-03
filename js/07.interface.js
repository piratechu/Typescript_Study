"use strict";
(() => {
    class myClass {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sound() {
            console.log(this.name, "bow-wow");
        }
    }
    const myFirst = new myClass("張三", 50, "MALE");
    myFirst.sound();
})();
