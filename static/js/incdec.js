//Increment Decrement SOLUTION
var total_amount = 0;

var Mangalarathi = 30, Mahapooja = 50, Ashleshabali = 100, Karpuraarathi = 50, Sarpasamskara = 200, MahaAbhisheka = 250;
var Mangalarathi_q = 0, Mahapooja_q = 0, Ashleshabali_q = 0, Karpuraarathi_q = 0, Sarpasamskara_q = 0, MahaAbhisheka_q = 0;
var name = "", Date = "";
var MangalarathiBill = "", MahapoojaBill = "", AshleshabaliBill = "", KarpuraarathiBill = "", SarpasamskaraBill = "", MahaAbhishekaBill = "";
// var amount = {
//     'total_amount': total_amount,
// }

document.getElementById("AMT").innerHTML = total_amount;
document.getElementById("totalhidden").value = total_amount;
//mangalarathi
$(document).ready(function () {
    var amount1 = 50;
    const minus = $('.quantity__minus1');
    const plus = $('.quantity__plus1');
    const input = $('.quantity__input1').attr('readonly', true);
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount1;
            console.log("Mangalarathi", total_amount);
            document.getElementById("AMT").innerHTML = total_amount;
            document.getElementById("totalhidden").value = total_amount;


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
        document.getElementById("totalhidden").value = total_amount;
        input.val(value);
    })
});

//maha pooja
$(document).ready(function () {
    var amount2 = 100;
    const minus = $('.quantity__minus2');
    const plus = $('.quantity__plus2');
    const input = $('.quantity__input2').attr('readonly', true);
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount2;
            console.log("Maha", total_amount);
            document.getElementById("AMT").innerHTML = total_amount;
            document.getElementById("totalhidden").value = total_amount;
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
        document.getElementById("totalhidden").value = total_amount;
        input.val(value);
    })
});

//ashleshabali
$(document).ready(function () {
    var amount3 = 200;
    const minus = $('.quantity__minus3');
    const plus = $('.quantity__plus3');
    const input = $('.quantity__input3').attr('readonly', true);
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount3;
            document.getElementById("AMT").innerHTML = total_amount;
            document.getElementById("totalhidden").value = total_amount;
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
        document.getElementById("totalhidden").value = total_amount;
        input.val(value);
    })
});

//karpuraarathi
$(document).ready(function () {
    var amount4 = 30;
    const minus = $('.quantity__minus4');
    const plus = $('.quantity__plus4');
    const input = $('.quantity__input4').attr('readonly', true);
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount4;
            document.getElementById("AMT").innerHTML = total_amount;
            document.getElementById("totalhidden").value = total_amount;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount4;
        document.getElementById("AMT").innerHTML = total_amount;
        document.getElementById("totalhidden").value = total_amount;
        input.val(value);
    })
});

//sarpasamskara
$(document).ready(function () {
    var amount5 = 2000;
    const minus = $('.quantity__minus5');
    const plus = $('.quantity__plus5');
    const input = $('.quantity__input5').attr('readonly', true);
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount5;
            document.getElementById("AMT").innerHTML = total_amount;
            document.getElementById("totalhidden").value = total_amount;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount5;
        document.getElementById("AMT").innerHTML = total_amount;
        document.getElementById("totalhidden").value = total_amount;
        input.val(value);
    })
});

//Maha abhisheka
$(document).ready(function () {
    var amount6 = 300;
    const minus = $('.quantity__minus6');
    const plus = $('.quantity__plus6');
    const input = $('.quantity__input6').attr('readonly', true);
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
            value--;
            total_amount -= amount6;
            document.getElementById("AMT").innerHTML = total_amount;
            document.getElementById("totalhidden").value = total_amount;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        total_amount += amount6;
        document.getElementById("AMT").innerHTML = total_amount;
        document.getElementById("totalhidden").value = total_amount;
        input.val(value);
    })
});





















document.getElementById("date").addEventListener("keyup", function () {
    document.getElementById("date2").innerHTML = this.value;
});


document.getElementById("name").addEventListener("keyup", function () {
    document.getElementById("name2").innerHTML = this.value;
});


document.getElementById("Mangalarathi").addEventListener("keyup", function () {
    if (this.value == "quantity_minus1" || this.value == "quantity_plus1") {
        MangalarathiBill = "";
        Mangalarathi_q = 0;
        showBill();
    } else {
        Mangalarathi_q = this.value;
        MangalarathiBill = "<tr><td>Mangalarathi</td><td>Rs. " + Mangalarathi + "</td><td>" + Mangalarathi_q + "</td><td>" + Mangalarathi + "x" + Mangalarathi_q + " = " + Mangalarathi * Mangalarathi_q + "</td></tr>";
        showBill();

    }
});


document.getElementById("Mahapooja").addEventListener("keyup", function () {
    if (this.value == "quantity_minus2" || this.value == "quantity_plus2") {
        MahapoojaBill = "";
        Mahapooja_q = 0;
        showBill();

    } else {
        Mahapooja_q = this.value;
        MahapoojaBill = "<tr><td>Maha pooja</td><td>Rs. " + Mahapooja + "</td><td>" + Mahapooja_q + "</td><td>" + Mahapooja + "x" + Mahapooja_q + " = " + Mahapooja * Mahapooja_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("Ashleshabali").addEventListener("keyup", function () {
    if (this.value == "quantity_minus3" || this.value == "quantity_plus3") {
        AshleshabaliBill = "";
        Ashleshabali_q = 0;
        showBill();

    } else {
        Ashleshabali_q = this.value;
        AshleshabaliBill = "<tr><td>Ashleshabali</td><td>Rs. " + Ashleshabali + "</td><td>" + Ashleshabali_q + "</td><td>" + Ashleshabali + "x" + Ashleshabali_q + " = " + Ashleshabali * Ashleshabali_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("Karpuraarathi").addEventListener("keyup", function () {
    if (this.value == "quantity_minus4" || this.value == "quantity_plus4") {
        KarpuraarathiBill = "";
        Karpuraarathi_q = 0;
        showBill();

    } else {
        Karpuraarathi_q = this.value;
        KarpuraarathiBill = "<tr><td>Karpuraarathi</td><td>Rs. " + Karpuraarathi + "</td><td>" + Karpuraarathi_q + "</td><td>" + Karpuraarathi + "x" + Karpuraarathi_q + " = " + Karpuraarathi * Karpuraarathi_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("Sarpasamskara").addEventListener("keyup", function () {
    if (this.value == "quantity_minus5" || this.value == "quantity_plus5") {
        SarpasamskaraBill = "";
        Sarpasamskara_q = 0;
        showBill();

    } else {
        Sarpasamskara_q = this.value;
        SarpasamskaraBill = "<tr><td>Sarpasamskara</td><td>Rs. " + Sarpasamskara + "</td><td>" + Sarpasamskara_q + "</td><td>" + Sarpasamskara + "x" + Sarpasamskara_q + " = " + Sarpasamskara * Sarpasamskara_q + "</td></tr>";
        showBill();
    }
});


document.getElementById("MahaAbhisheka").addEventListener("keyup", function () {
    if (this.value == "quantity_minus6" || this.value == "quantity_plus6") {
        MahaAbhishekaBill = "";
        MahaAbhisheka_q = 0;
        showBill();

    } else {
        MahaAbhisheka_q = this.value;
        MahaAbhishekaBill = "<tr><td>Maha Abhisheka</td><td>Rs. " + MahaAbhisheka + "</td><td>" + MahaAbhisheka_q + "</td><td>" + MahaAbhisheka + "x" + MahaAbhisheka_q + " = " + MahaAbhisheka * MahaAbhisheka_q + "</td></tr>";
        showBill();
    }
});

function showBill() {
    document.getElementById("bill").innerHTML = MangalarathiBill + MahapoojaBill + AshleshabaliBill + KarpuraarathiBill + SarpasamskaraBill + MahaAbhishekaBill; //table statement
    document.getElementById("amounts").innerHTML = Mangalarathi * Mangalarathi_q + Mahapooja * Mahapooja_q + Ashleshabali * Ashleshabali_q + Karpuraarathi * Karpuraarathi_q + Sarpasamskara * Sarpasamskara_q + MahaAbhisheka * MahaAbhisheka_q; // total amount
}

// const $btnPrint = document.querySelector("#btnPrint");
// $btnPrint.addEventListener("click", () => {
//     window.print();
// });


