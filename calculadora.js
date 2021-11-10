var op1 = "", simbolo = "", op2 = ""; op3 = "";
function inicio() {
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var sum = document.getElementById("sum");
    var resta = document.getElementById("resta");
    var mul = document.getElementById("mul");
    var div = document.getElementById("div");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var pantalla = document.getElementById("pantalla");
    /*var pantalla2 = document.getElementById("pantalla");*/
    var fac = document.getElementById("factor");
    var raiz = document.getElementById("raiz");
    var denom = document.getElementById("1/x");
    var pot = document.getElementById("^");



    cero.onclick = function () {
        pantalla.value = pantalla.value + "0";
    }

    uno.onclick = function () {
        pantalla.value = pantalla.value + "1";
    }

    dos.onclick = function () {
        pantalla.value = pantalla.value + "2";
    }

    tres.onclick = function () {
        pantalla.value = pantalla.value + "3";
    }

    cuatro.onclick = function () {
        pantalla.value = pantalla.value + "4";
    }

    cinco.onclick = function () {
        pantalla.value = pantalla.value + "5";
    }

    ocho.onclick = function () {
        pantalla.value = pantalla.value + "8";
    }

    seis.onclick = function () {
        pantalla.value = pantalla.value + "6";
    }

    siete.onclick = function () {
        pantalla.value = pantalla.value + "7";
    }

    nueve.onclick = function () {
        pantalla.value = pantalla.value + "9";
    }

    sum.onclick = function () {
        op1 = pantalla.value;
        simbolo = "+";
        pantalla.value = "";

    }

    resta.onclick = function () {
        op1 = pantalla.value;
        simbolo = "-";
        pantalla.value = "";



    }

    mul.onclick = function () {
        op1 = pantalla.value;
        simbolo = "*";
        pantalla.value = "";
    }

    div.onclick = function () {
        op1 = pantalla.value;
        simbolo = "/";
        pantalla.value = "";


    }


    fac.onclick = function () {
        op1 = pantalla.value;
        simbolo = "!";
        pantalla.value = "";
    }

    raiz.onclick = function () {
        op1 = pantalla.value;
        simbolo = "√";
        pantalla.value = "";
    }

    denom.onclick = function(){
        op1 = pantalla.value;
        simbolo = "1/x";
        pantalla.value = "";
    }

    pot.onclick = function(){
        op1 = pantalla.value
        simbolo = "^";
        pantalla.value = "";
    }

}

igual.onclick = function () {
    op2 = pantalla.value;
    var num = 1;
    var resultado = 0;
    switch (simbolo) {
        case "+": resultado = parseFloat(op1) + parseFloat(op2); pantalla.value = resultado.toString(); break;
        case "-": resultado = parseFloat(op1) - parseFloat(op2); pantalla.value = resultado.toString(); break;
        case "*": resultado = parseFloat(op1) * parseFloat(op2); pantalla.value = resultado.toString(); break;
        case "/":
            if (op2 == 0) {
                alert("lo que ingresaste no es valido");
            } else {
                resultado = parseFloat(op1) / parseFloat(op2); pantalla.value = resultado.toString(); break;
            }
        case "!":
            for (var i = 1; i <= op1; i++) {
                num = i * num;
            }
            resultado = num; pantalla.value = resultado.toString(); break;

        case "√":
            resultado = Math.sqrt(op1,2); pantalla.value = resultado.toString(); break;

        case "1/x": resultado = 1/parseFloat(op1); pantalla.value = resultado.toString(); break;

        case "^": resultado = Math.pow(parseFloat(op1), parseFloat(op2)); pantalla.value = resultado.toString(); break;
    }
}

reset.onclick = function () {
    pantalla.value = "";
    op1 = "";
    op2 = "";
}

