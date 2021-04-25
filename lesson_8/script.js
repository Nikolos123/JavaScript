// if (!("a" in window)) {
//     var a = 1;
// }
// alert(a); // я думал будет ошибка ну получил undefined


// var b = function a(x) {
//     x && a(--x);
// };
// alert(a); // ошибка как я и думал


// function a(x) {
//     return x * 2;
// }
//
// var a
// alert(a); // думал будет ошибка но получил формулу на вывод всю функцию

// function b(x, y, a) {
//     arguments[2] = 10;
//     alert(a);
// }
// b(1, 2, 3); // думал будет 3 не знал что arguments это можно использовать что бы обратиться к входящим параметрам

function a() {
    alert(this);
}
a.call(null);// не знал для чего метод call оказывается для вывода функции this