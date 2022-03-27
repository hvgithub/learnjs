class DoubelLinkedList {
    constructor (init) {
        this.head = new DoubleLinkedListNode(init);
        this.tail = this.head;
        this.length = 0;
    }

    insertAtHead (value) {
        let newNode = new DoubleLinkedListNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    insertAtTail (value) {
        let newNode = new DoubleLinkedListNode(value);
        this.tail.prev = newNode;
        newNode.next = this.tail;
        this.tail = newNode;
        this.length++;
    }

    getListByIndex (index) {
        let arr = [];
        let current = this.head;
        let i = 0;
        while (current !== null) {
            arr.push(current);
            current = current.next;
        }
        console.log(`Value at index: ${arr[index]}`);
        return arr[index];
    }

    getListByIndexFromTail (index) {
        let arr = [];
        let current = this.tail;
        let i = 0;
        while (current !== null) {
            arr.push(current.value);
            current = current.prev;
        }
        console.log(`Value at index: ${arr[this.length - 1 - index]}`);
        return arr[this.length - 1 - index];
    }

    printfromTail () {
        let current = this.tail;
        let arr = [];
        let output = "";
        while (current !== null) {
            output = `${output}<--${current.value}`;
            current = current.prev;
        }
        output = `null${output}`;
        console.log(output);
    }

    printfromhead () {
        let current = this.head;
        let arr = [];
        let output = "";
        while (current !== null) {
            output = `${output}${current.value}->`;
            current = current.next;
        }
        output = `${output}null`;
        console.log(output);
    }

    removeFirst () {
        let current = this.head;
        //let prevNode = current.prev; //always null
        let nextNode = current.next;
        nextNode.prev = current;
        this.head = nextNode;
    }
    removeNode (index) {
        if (index == 0) {
            this.removeFirst();
        }
        let node = this.getListByIndex(index);
        console.log(node.value);
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
}

class DoubleLinkedListNode {
    constructor (value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

const dll = new DoubelLinkedList("head");
dll.insertAtHead(10);
dll.insertAtHead(20);
dll.insertAtHead(30);
dll.printfromhead();
dll.printfromTail();
dll.getListByIndex(0);
dll.getListByIndex(dll.length - 1);
dll.getListByIndexFromTail(1);
dll.removeNode(0);
dll.printfromhead();
