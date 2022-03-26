const LinkedList = require("./linkedlist");

const ll = LinkedList.fromValues(10, 20, 30, 40);
console.log(`value==>${ll.getByIndex(2).data}`);
ll.insertAtIndex(3, 100000);
ll.print();

//ll.removeHead();
//ll.print();

ll.removeAtIndex(3);
ll.print();
