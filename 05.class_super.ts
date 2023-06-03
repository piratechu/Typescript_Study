// super 關鍵字

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
    class Dog extends animal {
        // 如果在子類建立構造函數，會override繼承物件，所以要
        // 使用 super 將繼承物件進行引用
        constructor(name: string, age: number) {
            super(name, age); //調用父類構造函數
        }
        sound(): void {
            // 在物件方法中，super 就表示當前物件的繼承的物件內容
            super.sound("bow-wow");
        }
    }
})();
