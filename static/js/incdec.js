//Increment Decrement SOLUTION
var total_amount = 0;

$(document).ready(function () {
    const minus = $('.quantity__minus7');
    var amount = 50;
    const plus = $('.quantity__plus7');
    const input = $('.quantity__input7');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount;
            console.log(total_amount);
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount;
        console.log(total_amount);
        input.val(value);
    })
});


$(document).ready(function () {
    const minus = $('.quantity__minus2');
    const plus = $('.quantity__plus2');
    const input = $('.quantity__input2');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })
});


$(document).ready(function () {
    const minus = $('.quantity__minus3');
    const plus = $('.quantity__plus3');
    const input = $('.quantity__input3');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })
});


$(document).ready(function () {
    const minus = $('.quantity__minus4');
    const plus = $('.quantity__plus4');
    const input = $('.quantity__input4');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })
});


$(document).ready(function () {
    const minus = $('.quantity__minus5');
    const plus = $('.quantity__plus5');
    const input = $('.quantity__input5');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })
});


$(document).ready(function () {
    const minus = $('.quantity__minus6');
    const plus = $('.quantity__plus6');
    const input = $('.quantity__input6');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })
});


$(document).ready(function () {
    const minus = $('.quantity__minus1');
    const plus = $('.quantity__plus1');
    const input = $('.quantity__input1');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })
});


$(document).ready(function () {
    const minus = $('.quantity__minus1');
    const plus = $('.quantity__plus1');
    const input = $('.quantity__input1');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })
});