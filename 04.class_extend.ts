// 避免與其他檔案命名空間衝突
// https://developer.mozilla.org/zh-TW/docs/Glossary/IIFE

(function () {
    class animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sound(animalSound: string) {
            console.log(animalSound);
        }
    }
    //dog 繼承動物類別
    //繼承可以將共用的類別屬性統一共用
    class dog extends animal {
        // 繼承的部分如果添加相同名稱，將會覆蓋掉原繼承的方法
        // override 覆寫繼承物件方法
        sound(): void {
            console.log("bow-wow...bow-wow....");
        }
        // 可以自行添加新方法
        run(): void {
            console.log(`${this.name} 在奔跑~~`);
        }
    }
    const mydog = new dog("來福", 5);
    console.log(mydog.sound());
    console.log(mydog.run());
})();
