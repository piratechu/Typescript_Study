"use strict";
(() => {
    function fn1(a) {
        return a;
    }
    fn1("Hello");
    fn1(3);
    function fn2(a, b) {
        console.log(b);
        return a;
    }
    function fn3(a) {
        return a.length;
    }
    fn3("hello");
    class myClass {
        constructor(name) {
            this.name = name;
        }
    }
    const mc = new myClass("豬八戒");
})();
