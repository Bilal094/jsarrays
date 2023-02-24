var title = document.createElement("h1");
var arrDisplay = document.createElement("p");
var numArr = [];

let num = prompt("Voer een getal in:");

for (i = 0; i <= num; i++) {
    numArr.push(i);
}

arrDisplay.innerHTML = "Array : " + numArr;
document.body.appendChild(arrDisplay);

for (i = 0; i <= num; i++) {
    for (x = 0; x < i; x++) {
        arrDisplay.innerHTML += numArr[x];
    }
    arrDisplay.innerHTML += "<br>";
    document.body.appendChild(arrDisplay);
}