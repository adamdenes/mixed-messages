const messages = {
    starter: ['knock'],
    question: ['goliath', 'broccoli', 'wooden shoe', 'boo', 'cows go', 'harry'],
    ending: [
        'down, you look-eth tired', 
        'doesn’t have a last name, silly', 
        'shoe like to hear another joke',
        'why are you crying',
        'no silly, cows go MOO',
        'up and answer the door'
    ],
    punctuation: ['.', '!', '?']
};

const getRandomItem = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const toCapital = string => {
    const firstLetter = string.charAt(0).toUpperCase();
    const restOfString = string.slice(1);
    return firstLetter + restOfString;
}

const generateMessage = obj => {
    let start = null;
    let name = null; 
    let end = null;
    let punct = null
    
    for (let key in obj) {
        switch (key) {
            case 'starter':
                start = getRandomItem(obj[key]);
                break;
            case 'question':
                name = getRandomItem(obj[key]);
                break;
            case 'ending':
                end = getRandomItem(obj[key]);
                break;
            case 'punctuation':
                punct = getRandomItem(obj[key]);
                break;
            default:
                return 'Error';
        }
    }
    return `${toCapital(start)}-${start}${punct} Who's there? ${toCapital(name)}. ${toCapital(name)} who${punct} ${toCapital(name)} ${end}${punct}`;
};

// console.log(generateMessage(messages));