function UpperLowerRand() {
    var cadena = "";
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++) {
        cadena += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    return cadena;
}

function UpperLowerRandIn(mask) {
    var maskArr = mask.split('');
    var sizeOfMask = maskArr.length;
    for (var i = 0; i < sizeOfMask; i++) {
        if (maskArr[i] === 'X') {
            maskArr[i] = rSU(1);
        } else if (maskArr[i] === 'x') {
            maskArr[i] = rSL(1);
        }
    }
    return maskArr.join('');
}

function rSU(length = 10, keywords = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    var output = '';
    for (var i = 0; i < length; i++) {
        var randIndex = Math.floor(Math.random() * keywords.length);
        output += keywords.charAt(randIndex);
    }
    return output;
}

function rSL(length = 10, keywords = '0123456789abcdefghijklmnopqrstuvwxyz') {
    var output = '';
    for (var i = 0; i < length; i++) {
        var randIndex = Math.floor(Math.random() * keywords.length);
        output += keywords.charAt(randIndex);
    }
    return output;
}

function load() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("output_randIn").innerHTML = "";

    for (var i = 0; i < 10; i++) {
        document.getElementById("output").innerHTML += UpperLowerRand() + "<br>";
    }

    for (var i = 0; i < 10; i++) {
        document.getElementById("output_randIn").innerHTML += UpperLowerRandIn('XXXX-xxxx-XXXX-xxxx') + "<br>";
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    load();
});

/* 

Credits,
Krediitit,
Krediter: 2023 - mazkdevf - https://github.com/mazkdevf

Minified version of the above code,
Yllä olevan koodin tiivistetty versio,
Minifierad version av ovanstående kod:

function UpperLowerRand(){var cadena=""; var letras="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; for (var i=0; i < 10; i++){cadena +=letras.charAt(Math.floor(Math.random() * letras.length));}return cadena;}function UpperLowerRandIn(mask){var maskArr=mask.split(''); var sizeOfMask=maskArr.length; for (var i=0; i < sizeOfMask; i++){if (maskArr[i]==='X'){maskArr[i]=rSU(1);}else if (maskArr[i]==='x'){maskArr[i]=rSL(1);}}return maskArr.join('');}function rSU(length=10, keywords='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'){var output=''; for (var i=0; i < length; i++){var randIndex=Math.floor(Math.random() * keywords.length); output +=keywords.charAt(randIndex);}return output;}function rSL(length=10, keywords='0123456789abcdefghijklmnopqrstuvwxyz'){var output=''; for (var i=0; i < length; i++){var randIndex=Math.floor(Math.random() * keywords.length); output +=keywords.charAt(randIndex);}return output;}function load(){document.getElementById("output").innerHTML=""; document.getElementById("output_randIn").innerHTML=""; for (var i=0; i < 10; i++){document.getElementById("output").innerHTML +=UpperLowerRand() + "<br>";}for (var i=0; i < 10; i++){document.getElementById("output_randIn").innerHTML +=UpperLowerRandIn('XXXX-xxxx-XXXX-xxxx') + "<br>";}}document.addEventListener("DOMContentLoaded", function (event){load();});

*/