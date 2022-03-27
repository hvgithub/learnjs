const LinkedList = require("./linkedList");

class DoubleLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    insertAtHead (data) {
        if (!this.head) {
        }
        this.length++;
    }
    print () {
        let current = this.head;
        let output = "";
        while (current !== null) {
            output = `${output}${current.data}->`;
            current = current.next;
        }
        output = `${output}null`;
        console.log(output);
    }
    printFromTail () {
        let current = this.tail;
        let output = "";
        while (current !== null) {
            output = `${output}<-${current.data}`;
            current = current.prev;
        }
        output = `null${output}`;
        console.log(`${output}`);
    }
}

class DoubleLinkedListNode {
    constructor (data, prevnode = null, nextnode = null) {
        this.data = data;
        this.prev = prevnode;
        this.next = nextnode;
    }
}

let dll = new DoubleLinkedList();
console.log(dll);
exit();
dll.print();
dll.printFromTail();
dll.insertAtHead("10");
dll.print();
dll.printFromTail();

dll.insertAtHead("20");
dll.print();
dll.printFromTail();

dll.insertAtHead("30");
dll.print();
dll.printFromTail();

dll.insertAtHead("40");
dll.print();
dll.printFromTail();

console.log("-------");
dll.printFromTail();
