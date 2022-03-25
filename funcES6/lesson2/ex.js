
const createPrinter1 = function () { 
	return function(){console.log("Hello");} 
}

const createPrinter =  () => () => console.log("Hello");

const double = x => 2 * x;
const triple = x => 3 * x;

//const createMuliplier = y => x => x * y;
const createMul = function(y) {
		console.log("y=",y);
		return ( function(x) {console.log("x=",x);return x * y})

}

const d = createMul(3);
d(2)

