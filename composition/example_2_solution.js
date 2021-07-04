const str = 'Innovation distinguishes between a leader and a follower.!!'

const trimString = str => str.replace(/^\s*|\s*$/g, '');

const noPunction = str => str.replace(/[?.,!]/g, '');

const capitalizeStr = str => str.toUpperCase();

const splitStr = str => str.split(" ");

const noArticles = str => (str !== 'A' && str !== 'AN' && str !== 'THE');

const filterArticles = arr => arr.filter(noArticles);

const compose = (...fns) => (x) => fns.reduce((value, currentFunction) => currentFunction(value), x);

// const prepareString = compose1(filterArticles, splitStr, capitalizeStr, noPunction, trimString)
const prepareString = compose(trimString, noPunction, capitalizeStr, splitStr, filterArticles);

console.log(filterArticles(splitStr(capitalizeStr(noPunction(trimString(str)))))); // option 1
console.log(prepareString(str)); // option 2
