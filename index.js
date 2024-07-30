// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


function writeCards(arrayOfNames, eventName){
    const messeges = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        console.log(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
        messeges.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return messeges;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown (number) {
    while(number >= 0){
        console.log(number--)
    }
}