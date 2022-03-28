class Cache {
    constructor (capacity) {
        this.count = 0;
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new DLLNode();
        this.tail = new DLLNode();
        this.head.prev = null;
        this.tail.next = null;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNode (node) {
        let currentNode = this.head;
        currentNode.prev = node;
        node.next = currentNode;
        this.head = node;
    }

    removeNodeAtTail (node) {
        let currentNode = this.tail;
        prevNode = node.prev;
        prevNode.next = currentNode;
        currentNode.prev = prevNode;
        current = prevNode;
    }

    removeNode (node) {
        prevNode = node.prev;
        nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    moveToHead (node) {
        let current = this.head;
        //current.prev == null
        current.prev = node;
        node.next = current;
        current = node;
    }

    popTail (node) {
        let tail = this.tail.prev;
        this.removeNode(tail);
        return tail;
    }
    put (key, value) {
        const node = this.cache[key];
        if (!node) {
            const newNode = new DLLNode(key, value, null, null);
            this.cache[key] = newNode;
            this.addNode(newNode);
            this.count++;

            if (this.count > this.capacity) {
                console.log("Node should be evicted");
            }
        }
    }
    get (key) {
        const node = this.cache[key];
        if (!node) {
            return -1;
        }
        this.moveToHead(node);
        return node.val;
    }
}

class DLLNode {
    constructor (key, value, prev, next) {
        this.key = key;
        this.val = value;
        this.prev = prev;
        this.next = next;
    }
}

var cache = new Cache(2);

cache.put(1, "Hello");
cache.put(2, "World");
console.log(cache.get(1));
