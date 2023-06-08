/* Дано два різні числа. Визначити, яке з них більше, а яке менше.*/

let compare = confirm('Are you ready? Task 1')

if (compare) {
    let a = +prompt('Enter number a', ' ');
    let b = +prompt('Enter number b', ' ');
    if (a>b) {
        alert(`${a} is greater, ${b} is less`);
    } else if (a<b) {
        alert(`${a} is less, ${b} is greater`);
    } else {
        alert('these numbers are equal');
    }
} else {
    alert('go to task 2');
}

/*Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?*/

let distance = confirm('OK, Task 2');

if (distance) {
    let km = +prompt('how many kilometers?', ' ');
    let ft = +prompt('how many foots?', ' ');
    if ((km*1000)>(ft*0.305)) {
        alert('less distance in foots');
    } else if((km*1000)<(ft*0.305)) {
        alert('less distance in kilometers');
    } else {
        alert('they are equal');
    }
} else {
    alert('go to task 3');
}

/*Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)*/

let divide = confirm('Welcome to Task 3');

if (divide) {
    let A = +prompt('Enter number A');
    let B = +prompt('Enter number B');
    if ((A%B == 0) & (B%A == 0)) {
        alert(`${B} is a divisor of ${A} / ${A} is a divisor of ${B}`);
    } else if((A%B == 0) & (B%A != 0)){
        alert(`${B} is a divisor of ${A} / ${A} is not a divisor of ${B}`);
    } else if((A%B != 0) & (B%A == 0)){
        alert(`${B} is not a divisor of ${A} / ${A} is a divisor of ${B}`);
    } else {
        alert(`numbers ${B} and ${A} are not divisors of each other`);
    }
}else {
    alert('go to task 4');
}

/*Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.*/

let even = confirm('Welcome to Task 4');

if (even) {
    let num = +prompt('Enter any number');
    let digit = num%10;
    if (num % 2 ==0) {
        alert(`${digit} is a even number`);
    } else {
        alert(`${digit} is a odd number`);
    }
} else {
    alert('go to task 5')
}

/*Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?*/

let TwoDigit = confirm('Welcome to Task 5');

if (TwoDigit) {
    let newNum = +prompt('Enter two-digit number');
    let numA = Math.floor(newNum/10);
    let numB = newNum%10;
    if (numA>numB) {
        alert(`first number ${numA} is greater than second ${numB}`);
    } else if (numA<numB) {
        alert(`second number ${numB} is greater than first ${numA}`);
    } else {
        alert('they are equal');
    }
} else {
    alert('go to task 6');
}

/*Дано тризначне число.
Визначити чи є парною сума його цифр.
Визначити, чи кратна сума цифр п'яти.
Визначити чи є добуток його цифр більше 100.*/


/*Дано тризначне число.
Чи правда, що всі цифри однакові?
Чи є серед цифр цифри однакові?*/


/*Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)*/