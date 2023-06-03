"use strict";
(function () {
    class animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sound(animalSound) {
            console.log(animalSound);
        }
    }
    class Dog extends animal {
        constructor() {
            super("旺財", 5);
        }
        sound() {
            super.sound("bow-wow");
        }
    }
})();
