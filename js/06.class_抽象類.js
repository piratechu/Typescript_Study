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
        sound() {
            super.sound("bow-wow");
        }
        getLegCount() {
            return 4;
        }
    }
    const myDog = new Dog("旺財", 10);
    console.log(myDog.sound());
})();
