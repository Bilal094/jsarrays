let days = [' Maandag', ' Dinsdag', ' Woensdag', ' Donderdag', ' Vrijdag', ' Zaterdag', ' Zondag']

function dayDisplay (type) {
    if (type == "all") {
    document.getElementById("all").innerHTML = days;
    } else if (type == "businessDays") {
        document.getElementById("businessDays").innerHTML = days.slice(0,5);
    } else if (type == "weekendDays") {
        document.getElementById("weekendDays").innerHTML = days.slice(5,7);
    } else if (type == "allReversed") {
        document.getElementById("allReversed").innerHTML = days.reverse();
    } else if (type == "businessReversed") {
        document.getElementById("businessReversed").innerHTML = days.slice(2,7);
    } else if (type == "weekendReversed") {
        document.getElementById("weekendReversed").innerHTML = days.slice(0,2);
    }
}

dayDisplay("all");
dayDisplay("businessDays");
dayDisplay("weekendDays");
dayDisplay("allReversed");
dayDisplay("businessReversed");
dayDisplay("weekendReversed");