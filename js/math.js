const arrayEen = [1,2,3,4,5,6,7,8,9,10];
const arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(list1, list2) {
    for (let i = 0; i < arrayEen.length; i++) {
        document.getElementById("optellen").innerHTML += `${list1[i]} + ${list2[i]} = ` + (list1[i] + list2[i]) + "<br>";
    }
}

function aftrekken(list1, list2) {
    for (let i = 0; i < arrayEen.length; i++) {
        document.getElementById("aftrekken").innerHTML += `${list2[i]} - ${list1[i]} = ` + (list2[i] - list1[i]) + "<br>";
    }
}

function vermenigvuldigen(list1, list2) {
    for (let i = 0; i < arrayEen.length; i++) {
        document.getElementById("vermenigvuldigen").innerHTML += `${list1[i]} * ${list2[i]} = ` + (list1[i] * list2[i]) + "<br>";
    }
}

function delen(list1, list2) {
    for (let i = 0; i < arrayEen.length; i++) {
        document.getElementById("delen").innerHTML += `${list2[i]} / ${list1[i]} = ` + (list2[i] / list1[i]) + "<br>";
    }
}
optellen(arrayEen, arrayTwee);
aftrekken(arrayEen, arrayTwee);
vermenigvuldigen(arrayEen, arrayTwee);
delen(arrayEen, arrayTwee);