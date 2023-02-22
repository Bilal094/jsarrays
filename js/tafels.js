arrNumber = [1,2,3,4,5,6,7,8,9,10];

function tafels(arr, tag, num) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(tag).innerHTML += `${arr[i]} * ${num} = ` + arr[i] * num  + "<br>";
    }
}

tafels(arrNumber, "two", 2);
tafels(arrNumber, "four", 4);
tafels(arrNumber, "six", 6)
tafels(arrNumber, "eight", 8)