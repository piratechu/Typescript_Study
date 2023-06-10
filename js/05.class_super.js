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
        constructor(name, age) {
            super(name, age);
        }
        sound() {
            super.sound("bow-wow");
        }
    }
})();
