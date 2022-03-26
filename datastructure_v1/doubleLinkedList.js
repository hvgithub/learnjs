const LinkedList = require("./linkedList");

class DoubleLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    insertAtHead_ll (data) {
        let currentNode = this.head;
        let newNode = new LinkedList(data, currentNode);
        this.head = newNode;
    }

    insertAtHead (data) {
        let current = this.head;
        let prevNode = null;
        let nextNode = current;
        let last = this.tail;

        if (this.head == null) {
            prevNode = null;
            nextNode = null;
        } else {
            prevNode = current.prev;
            nextNode = current.next;
        }

        let newNode = new DoubleLinkedListNode(data, null, current);
        this.head = newNode;
        //newNode.next = current;
        this.tail = last;

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
            output = `${output}${current.data}->`;
            current = current.prev;
        }
        output = `${output}null${this.length}`;
        console.log(output);
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
dll.print();
dll.insertAtHead("10");
dll.print();
dll.insertAtHead("20");
dll.print();
dll.insertAtHead("30");
dll.print();

dll.insertAtHead("40");
dll.print();
console.log("-------");
dll.printFromTail();
