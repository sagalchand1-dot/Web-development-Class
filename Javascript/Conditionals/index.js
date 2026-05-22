let age =18;

if(age>=18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

let marks =85;

if (marks>=90) {
    console.log("You have got A grade");
} else if (marks >= 70){
    console.log("You have got B grade");
} else{
    console.log("You have C grade");
}

let day ="friday";
switch (day) {
    case "sunday":
    console.log ("sunday");
    break;
    case "monday":
    console.log("Monday");
    break;
    default:
    console.log("Invalid day");
}

let test_day = 3;

switch (test_day) {
    case 1:
     console.log("Sunday");
     break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log ("Invalid day");
}



for (let i = 0; i <= 4; i++) {
    console.log(i + 1);
}