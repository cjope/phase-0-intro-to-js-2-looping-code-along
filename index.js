const name = ['Lisa', 'Kaitlin','Jan'];
const gift = 'surprise'

function writeCards(name,gift){
    let cardArray = [];
    for (let i = 0; i < name.length; i++) {
        let message = (`Thank you, ${name[i]}, for the wonderful ${gift} gift!`);
        cardArray.push(message);
    }
    return cardArray;
}


function countDown(count){
    let newCount = count;
    while (newCount >= 0){
        console.log(newCount--);
    }
}
