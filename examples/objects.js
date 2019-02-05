'use strict';

const text = `Миша, а что ты используешь для преобразования набранного на английской раскладке текста в русский?`;
const words = text.split(' ');

const ifWordIsLongerThen3Chars = (word) => word.length > 3;


function getWordsByCondition(words, conditionCallback) {
  return words
    .filter(conditionCallback);
}

const createFilter = (conditionCallback) => {
  return (words) => {
    return words.filter(conditionCallback);
  };
};


const getWordsLongerThan2 = createFilter((word) => word.length > 2);

const getWordsLongerThan2 = (words) => {
  return words.filter((word) => word.length > 2);
};



const getWordsLongerThan4 = createFilter((word) => word.length > 4);

const getWordsLongerThan4 = (words) => {
  return words.filter((word) => word.length > 4);
};





console.log(
  getWordsLongerThan3(words)
);

console.log(
  getWordsLongerThan4(words)
);
