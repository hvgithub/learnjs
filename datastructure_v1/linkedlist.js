class LinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    }

    insertAtHead (data) {
        let currentNode = this.head;
        const newNode = new LinkedListNode(data, currentNode);
        this.head = newNode;
        this.length++;
    }
    getByIndex (index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    insertAtIndex (index, data) {
        if (index === 0) return this.insertAtHead(data);

        let prevNode = this.getByIndex(index - 1);
        if (prevNode == null) {
            return null;
        }
        let currentNode = this.getByIndex(index);
        let newNode = new LinkedListNode(data, currentNode.next);
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.length++;
        this.print();
    }

    removeHead () {
        this.head = this.head.next;
        this.length--;
    }

    removeAtIndex (index) {
        if (index == null) {
            return this.removeHome();
        }
        this.print();
        let prevNode = this.getByIndex(index - 1);
        let currentNode = this.getByIndex(index);
        prevNode.next = currentNode.next;
        this.length--;
        this.print();
    }
    print () {
        let output = "";
        let current = this.head;
        while (current) {
            output = `${output}${current.data}->`;
            current = current.next;
        }
        console.log(`${output}->null`);
    }
}

class LinkedListNode {
    constructor (data, next) {
        this.data = data;
        this.next = next;
    }
}

LinkedList.fromValues = function (...values) {
    const ll = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
        ll.insertAtHead(values[i]);
    }
    return ll;
};

module.exports = LinkedList;
