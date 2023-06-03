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
    class dog extends animal {
        sound() {
            console.log("bow-wow...bow-wow....");
        }
        run() {
            console.log(`${this.name} 在奔跑~~`);
        }
    }
    const mydog = new dog("來福", 5);
    console.log(mydog.sound());
    console.log(mydog.run());
})();
