
let today = new Date(Date.now());
today = today.getDay();
let day;

switch(today){
    case 0:
        day = "Sunday";
        break;

        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tuesday";
            break;

        case 3:
            day = "Wednesday";
            break;

            case 4:
                day = "Thursday";
                break;

            case 5:
                day = "Friday";
                break;

            case 6:
                day = "Saturday";
                break;
                
            default:
                day = "good day";

}

console.log(`today is ${day}`);