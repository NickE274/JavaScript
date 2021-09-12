let a = parseInt(prompt('Введите число a'));
let b = parseInt(prompt('Введите число b'));

if (a >= 0 && b >= 0) {

    x = a - b
    alert(x)

} else if (a < 0 && b < 0) {

    x = a * b
    alert(x)

} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {

    x = a + b
    alert(x)

}