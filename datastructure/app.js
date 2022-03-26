const LinkedList = require("../datastructure/linkedlist");

const ll = LinkedList.fromValues(10, 20, 30, 40);
console.log(`value==>${ll.getByIndex(2).data}`);
ll.print();
