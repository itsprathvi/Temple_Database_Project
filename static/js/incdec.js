//Increment Decrement SOLUTION
var total_amount = 0;
// var amount = {
//     'total_amount': total_amount,
// }

document.getElementById("AMT").innerHTML = total_amount;
//mangalarathi
$(document).ready(function () {
    var amount1 = 50;
    const minus = $('.quantity__minus1');
    const plus = $('.quantity__plus1');
    const input = $('.quantity__input1');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount1;
            console.log("Mangalarathi", total_amount);
            document.getElementById("AMT").textContent = total_amount;

        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount1;
        console.log("Mangalarathi", total_amount);
        document.getElementById("AMT").innerHTML = total_amount;
        input.val(value);
    })
});

//maha pooja
$(document).ready(function () {
    var amount2 = 100;
    const minus = $('.quantity__minus2');
    const plus = $('.quantity__plus2');
    const input = $('.quantity__input2');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount2;
            console.log("Maha", total_amount);
            document.getElementById("AMT").innerHTML = total_amount;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount2;
        console.log("Maha", total_amount);
        document.getElementById("AMT").innerHTML = total_amount;
        input.val(value);
    })
});

//ashleshabali
$(document).ready(function () {
    var amount3 = 200;
    const minus = $('.quantity__minus3');
    const plus = $('.quantity__plus3');
    const input = $('.quantity__input3');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount3;
            document.getElementById("AMT").innerHTML = total_amount;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount3;
        console.log(total_amount);
        document.getElementById("AMT").innerHTML = total_amount;
        input.val(value);
    })
});

//karpuraarathi
$(document).ready(function () {
    var amount4 = 30;
    const minus = $('.quantity__minus4');
    const plus = $('.quantity__plus4');
    const input = $('.quantity__input4');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount4;
            document.getElementById("AMT").innerHTML = total_amount;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount4;
        document.getElementById("AMT").innerHTML = total_amount;
        input.val(value);
    })
});

//sarpasamskara
$(document).ready(function () {
    var amount5 = 2000;
    const minus = $('.quantity__minus5');
    const plus = $('.quantity__plus5');
    const input = $('.quantity__input5');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount5;
            document.getElementById("AMT").innerHTML = total_amount;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount5;
        document.getElementById("AMT").innerHTML = total_amount;
        input.val(value);
    })
});

//Maha abhisheka
$(document).ready(function () {
    var amount6 = 300;
    const minus = $('.quantity__minus6');
    const plus = $('.quantity__plus6');
    const input = $('.quantity__input6');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount6;
            document.getElementById("AMT").innerHTML = total_amount;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount6;
        document.getElementById("AMT").innerHTML = total_amount;
        input.val(value);
    })
});




