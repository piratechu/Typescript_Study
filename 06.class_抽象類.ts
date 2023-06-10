// abstract 關鍵字
// 抽象類物件，不能被創建，只能被繼承
// 抽象類物件可以建立抽象方法

(function () {
    abstract class animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        //定義抽象方法，繼承物件必須進行implement
        //抽象方法只能定義在抽象類中，子類必須對抽象方法進行重寫
        abstract getLegCount(): number;

        sound(animalSound: string) {
            console.log(animalSound);
        }
    }
    //dog 繼承動物類別
    class Dog extends animal {
        sound(): void {
            // 在物件方法中，super 就表示當前物件的繼承的物件內容
            super.sound("bow-wow");
        }
        // 繼承中如果有抽象函數(abstract function)，需要在繼承後實作(implement)
        getLegCount(): number {
            return 4;
        }
    }
    const myDog = new Dog("旺財", 10);
    console.log(myDog.sound());
})();
