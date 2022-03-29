class Cache {
    constructor (capcity) {
        this.head = new DllNode("init", "head-dummy");
        this.tail = this.head;
        this.count = 0;
        this.capacity = capcity + 1; //head is always going to be init w/ dummy
        this.cache = [];
    }

    addOrUpdate (key, value) {
        // let key = this.cache.get(key);
        if (key !== null) {
            //perform update
        } else {
            //add
            // check if over capacity
            // if yes, delete
        }
    }
    add (key, value) {
        if (!this.cache[key]) {
            this.cache[key];
        }

        this.addToHead(key, value);
        if (this.count >= this.capacity) {
            this.removeNodeFromTail();
        }
        console.log(this);
    }
    addToHead (key, value) {
        let current = this.head;
        let newNode = new DllNode(key, value);
        newNode.next = current;
        current.prev = newNode;
        this.head = newNode;
        this.count++;
    }
    removeNodeFromTail () {
        let current = this.tail;
        let node2delete = current.prev;
        let key2delete = node2delete.key;
        let cacheIndex = this.cache.indexOf(key2delete);
        console.log("CONFIRM: To remove... ", `${key2delete}${this.cache}`);

        this.cache.splice(cacheIndex, 1);
        console.log("CONFIRM: Removed ", `${this.cache}`);
        let prevNode = node2delete.prev;
        prevNode.next = current;
        current.prev = prevNode;
        this.tail = prevNode;
    }
    removeNode (node) {
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
    moveNodeToHead (node) {
        console.log("Node=", node);
        this.addToHead(node.key, node.value);
        this.removeNode(node);
        if (this.count > this.capacity) {
            this.removeNodeFromTail();
        }
    }
    get (key) {
        let current = this.head;
        while (current !== null) {
            if (current.key == key) {
                console.log(`Found and returning: ${current.key}->${current.value}`);
                this.moveNodeToHead(current);
                return current.value;
            } else {
                return -1;
            }
            current = current.next;
        }
    }
    printAll () {
        let current = this.head;
        let output = "";
        while (current !== null) {
            output = `${output}->[${current.key}-${current.value}]`;
            current = current.next;
        }
        output = `${output}null`;
        console.log(output);
    }

    printFromTail () {
        let current = this.tail;
        let output = "";
        while (current !== null) {
            output = `${output}<-key:${current.key}-value:${current.value}`;
            current = current.prev;
        }
        output = `null${output}`;
        console.log(output);
    }
}

class DllNode {
    constructor (key, value, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

const newDll = new Cache(3);
newDll.add(1, "a");
newDll.add(2, "b");
newDll.add(3, "c");
newDll.add(4, "zzz");

//newDll.printAll();
//newDll.printFromTail();
newDll.printAll();

newDll.get(1);
newDll.printAll();
