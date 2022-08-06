const LinkedList = require("./linked-list");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromHead();
  }
  peek() {
    return this.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(40);
stack.push(70);

console.log(stack.getSize());
stack.print();
