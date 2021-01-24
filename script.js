const messages = {
  starter: ["knock"],
  question: ["goliath", "broccoli", "wooden shoe", "boo", "cows go", "harry"],
  ending: [
    "down, you look-eth tired",
    "doesn’t have a last name, silly",
    "shoe like to hear another joke",
    "why are you crying",
    "no silly, cows go MOO",
    "up and answer the door",
  ],
  punctuation: [".", "!", "?"],
};

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const toCapital = (string) => {
  const firstLetter = string.charAt(0).toUpperCase();
  const restOfString = string.slice(1);
  return firstLetter + restOfString;
};

const generateMessage = (obj) => {
  const values = {
    starter: null,
    question: null,
    ending: null,
    punctuation: null,
  };

  for (let key in obj) {
    values[key] = getRandomItem(obj[key]);
  }

  return `${toCapital(values.starter)}-${values.starter}${
    values.punctuation
  } Who's there? ${toCapital(values.question)}. ${toCapital(
    values.question
  )} who${values.punctuation} ${toCapital(values.question)} ${values.ending}${
    values.punctuation
  }`;
};

// console.log(generateMessage(messages));
