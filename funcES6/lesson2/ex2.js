
const createPrinter = (x,y) => {
	
	return x/y
};

const secArgNotZero = func => 
(...args)=> {
	if (args[1]===0) {
		return null;
	}
	return func(...args);
}