class LinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    }

    /*----------------------------------------------------------------
	LinkedList {
		head: LinkedListNode { data: 'Hello', next: null },
		length: 1
		}
		LinkedList {
		head: LinkedListNode {
			data: '2',
			next: LinkedListNode { data: 'Hello', next: null }
		},
		length: 2
		}
	*/
    insertAtHead (data) {
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.length++;
    }

    getByIndex (index) {
        if (index < 0 || index > this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next; //this is the node at index
        }
        return current;
    }

    print () {
        let output = "";
        let current = this.head;
        while (current) {
            output = `${output}${current.data} ->`;
            current = current.next;
        }
        console.log(`${output}null`);
    }

    insertAtIndex_old (...newnodeparams) {
        const [index, data] = newnodeparams;

        if (index < 0 || index == null) {
            return null;
        }

        console.log(`Inside LL..insertAtIndex...data=${data},index=${index}`);
        let prevNode = this.getByIndex(index - 1);

        let currentNodeAtIndex = this.getByIndex(index);
        let newNode = new LinkedListNode(data, currentNodeAtIndex.next);
        prevNode.next = newNode;
        newNode.next = currentNodeAtIndex;
        console.log(`CurrentnNode=${currentNodeAtIndex}`);
        this.print();
    }

    insertAtIndex (index, data) {
        const prevNode = this.getByIndex(index - 1); //prevNode.data & prevNode.next should point to the new node
        const currentNode = this.getByIndex(index); // newNode's next should point to the current node
        const newNode = new LinkedListNode(data, currentNode.next);
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.print();
    }
}

class LinkedListNode {
    constructor (data, next, ll) {
        console.log(`Inside LLN...data=${data},next=${next}`);
        this.data = data;
        this.next = next;
    }
}

LinkedList.fromValues = function (...values) {
    const ll = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
        ll.insertAtHead(values[i]);
        console.log(i, ll);
    }
    return ll;
};

LinkedList.addAtIndex = function (ll, index, data) {
    ll.insertAtIndex(index, data);
    return ll;
};

module.exports = LinkedList;
