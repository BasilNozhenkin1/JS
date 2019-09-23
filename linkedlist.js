class Node {
	constructor(val) {    
	    this.prev = null;
	    this.val = val;
	    this.next = null;
	}
}


class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;

		this.length = 0;
	}

	size() {
		return this.length;
	}

	addToHead(val) {
		const newNode = new Node(val);
		newNode.next = this.head;

		if(this.head) this.head.prev = newNode;
		else this.tail = newNode;

		this.head = newNode;
		this.length++;
	}

	addToTail(val) {
		const newNode = new Node(val);
		newNode.prev = this.tail;

		if(this.tail) this.tail.next = newNode;
		else this.head = newNode;

		this.tail = newNode;
		this.length++;
	}

	removeHead() {
		if (!this.head) return null;

		let val = this.head.val;
		this.head = this.head.next;

		if(this.head) {
			this.head.prev = null 
		} else {
		    this.tail = null;
		}
		this.length--;
		return val;
	}
	removeTail() {
		if (!this.tail) return null;

		let val = this.tail.val;
		this.tail = this.tail.prev;

		if(this.head) {
			this.head.prev = null 
		} else {
		    this.tail = null;
		}
		this.length--;
		return val;
	}
	search(val) {
		let curNode = this.head;
		while (curNode) {
			if(curNode.val === val) return curNode;
			curNode = curNode.next; 
		}
	}
	print() {
		const result = [];

		let current = this.head;

		while(current) {
			result.push(current.val);
			current = current.next;
		}
		console.log(result);
	}
}

let ll = new LinkedList();
ll.addToHead(4)
ll.addToTail(8)
ll.addToTail(7)
ll.addToHead(4)
ll.print()