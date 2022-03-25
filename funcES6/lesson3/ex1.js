const num = [1,2,3,4,5];
const newNum= num.map((x)=>x*x);
console.log(newNum,num)

const isEven = x => x%2 ===0;
const newFil=num.filter(isEven);
console.log(newFil)


const localwords = ["Hello","goodbye","Antartica"];

const isLongerThan =y =>  word =>  word.length>y;

const newWord = localwords.filter(isLongerThan(1));
console.log(newWord);

const num2 = [0,1,2,3,4,5,6,7,8,9,10];
console.log(num2.slice(3,8));
const newNumArr2=num2.slice();
console.log("newNumArr2=",newNumArr2);

// 1,2,3
const asc = (a,b) => {
	if (a<b) return -1;
	if (a>b) return 1;
	if (a=b) return 0;
}

 newWordHello = "Hello";
const wordArr = newWordHello.split("");

console.log("split str to arr=",wordArr);

//console.log("arr rev=",wordArr.reverse().join(""));
let revString = wordArr.reverse().join("");

if (newWordHello === revString) {
	console.log ("Palindrome", newWordHello, revString);
} else {
	console.log("not palin");
}


console.log("acc=",num.reduce(((acc,ele)=> acc * ele),1))

const map = (arr, func) => {
console.log(map.name);
console.log(map.length);
console.log(map.toString());



	const newmap=[];
	for(let i=0; i<arr.length;i++) {
		console.log(func(arr[i]));
		newmap.push(func(arr[i]));
		console.log(newmap);
	} 
	console.log(newmap);

}

map([1,2,3], x=> x*2);


map([1,2,3], x=> -x);


map(['a','b','c'], x=> x.toUpperCase());

const newmap = (arr, func) => 
	arr.reduce((acc,x)=>{return [...acc,func(x)]},[]);

		console.log("map([1,2,3], x=> -x);=",newmap([1,2,3], x=> -x));


		const countDown = x => {if (x<0) {return} console.log(x); countDown(x-1); }
		countDown(10);



const electionVotes = [
	"a","b", "c", "b","c"
];

console.log(electionVotes.reduce((acc,val,i,electionVotes)=>({
		...acc,
		[val]:acc[val] ? acc[val]+1 : 1
})
,{}));


