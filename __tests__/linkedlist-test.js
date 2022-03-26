const LinkedList = require("../datastructure/linkedlist");

describe("#insertAtHead", () => {
    test("Add element to the beginning of the list...", () => {
        const ll1 = new LinkedList();
        expect(ll1.head).toBe(null);
        ll1.insertAtHead("Hello");
        const oldHead = ll1.head;
        ll1.insertAtHead("2");
        expect(ll1.head.data).toBe("2");
        expect(ll1.head.next).toBe(oldHead);
    });
});

describe("#getByIndex", () => {
    describe("with index < 0", () => {
        test("it retuns null", () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.getByIndex("0");
            expect(ll.head.data).toBe(10);
            expect(ll.head.next.data).not.toBe(10);
            expect(ll.head.next.data).toBe(20);
        });
    });
});

describe("#insertAtIndex", () => {
    test("", () => {
        const ll = LinkedList.fromValues(10, 20);
        ll.insertAtIndex(1, 8);
        expect(ll.head.next.data).toBe(8);
    });
});
