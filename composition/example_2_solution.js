const str = 'Innovation distinguishes between a leader and a follower.!!'

const trimString = str => str.replace(/^\s*|\s*$/g,'');

const noPunction = str => str.replace(/[?.,!]/g, '');

const capitalizeStr = str => str.toUpperCase();

const splitStr = str => str.split(" ");

const noArticles = str => (str !== 'A' && str !== 'AN' && str !== 'THE');

const filterArticles = arr => arr.filter(noArticles);

const compose = function(...fns) {
	return function(x) {
		return fns.reduceRight(function(v,f){
			return f(v);
		}, x)
	}
}

const prepareString = compose(filterArticles, splitStr,capitalizeStr,noPunction,trimString)

console.log(filterArticles(splitStr(capitalizeStr(noPunction(trimString(str)))))) // option 1
console.log(prepareString(str)) // option 1
