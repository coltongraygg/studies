// Fisher-Yates Algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);

function shuffle(array) {
    // iterate through array in reverse
    for (let i = array.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));

        // destructuring
        [array[i], array[random] = array[random], array[i]]
    }
}