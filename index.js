console.log('Hello World!');

function gcd(a,b){
	while (b !=0) { 
	
	t=a;
	a=b;
	b=t%b;
	console.log('here', t, a, b);
	}
	return a;
}

var v = gcd(10,5);

console.log('Mod=',v);