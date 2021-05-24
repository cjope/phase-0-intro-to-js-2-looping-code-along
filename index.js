const name = ["Lisa", "Kaitlin", "Jan"]
const event = "surprise";

function writeCards(name,event) {
    let cardArray = [];
    for (let i = 0; i < name.length; i++) {
        let message = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        cardArray.push(message);
    }
    return cardArray
}

function countDown(count) {
    let doomsdayTicker = count
    while (doomsdayTicker >= 0) {
        console.log(doomsdayTicker--);
    }
}
