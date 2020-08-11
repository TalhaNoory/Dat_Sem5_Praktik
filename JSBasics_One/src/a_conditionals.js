// Good Morning     5:00 AM — 11:59 AM
// Good Afternoon   12:00 PM — 4:59 PM
// Good Evening     5:00 PM — 4:59 AM

let goodMorning = "Good Morning";
let goodAfternoon = "Good Afternoon";
let goodEvening = "Good Evening";

let time = 17.01;

if (time >= 12 && time <= 17) {
    console.log(goodAfternoon)
} else if ( time <= 12) {
    console.log(goodMorning)
} else {
    console.log(goodEvening)
}

