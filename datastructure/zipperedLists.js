class Node {
    constructor (val) {
        this.next = null;
        this.val = val;
    }
}

class LinkedList {
    constructor (init) {
        this.head = new Node(init);
        this.count = 0;
    }

    addNodeToHead (val) {
        let current = this.head;
        let newNode = new Node(val);
        newNode.next = current;
        this.head = newNode;
        this.count++;
    }

    printNodes () {
        let current = this.head;
        let output = "";
        while (current != null) {
            output = `${output}->${current.val}`;
            current = current.next;
        }
        output = `${output}->null`;
        console.log(output);
    }
}

let ll1 = new LinkedList("ll1");
let ll2 = new LinkedList("ll2");

ll1.addNodeToHead("1");
ll2.addNodeToHead("2");
ll1.addNodeToHead("3");
ll2.addNodeToHead("4");
ll1.addNodeToHead("5");
ll2.addNodeToHead("6");

ll1.printNodes();
ll2.printNodes();

//console.log(ll1);

//console.log(ll2);

const a = new Node("a");
const b = new Node("b");

const x = new Node("x");
const y = new Node("y");

a.next = b;
x.next = y;

function zipperHeads (head1, head2) {
    let head = head1;
    let tail = head;
    let current1 = head1.next;
    let current2 = head2;
    tail.next = current1;
    let count = 0;
    while (current1 !== null && current2 !== null) {
        if (count % 2 == 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count++;
    }

    if (current1 !== null) {
        tail.next = current1;
    }
    if (current2 !== null) {
        tail.next = current2;
    }

    let current = head;
    while (current !== null) {
        console.log(`${current.val}`);
        current = current.next;
    }
}
zipperHeads(a, x);
