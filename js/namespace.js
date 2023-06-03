"use strict";
var A;
(function (A) {
    function test(str) {
        console.log("[Exception]", str);
    }
    A.test = test;
})(A || (A = {}));
A.test("Java output");
