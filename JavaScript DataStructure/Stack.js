class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element); // Insert the element
  }
  pop() {
    return this.items.pop(); // Pop the element from stack
  }
  peek() {
    return this.items[this.items.length - 1]; // returns the top of the stack
  }
  isEmpty() {
    return this.items.length === 0; //Returns true or False
  }
  size() {
    return this.items.length; // returns the size of stack
  }
  print() {
    console.log(this.items.toString()); //Returns a string representation of an array
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); //True

stack.push(1);
stack.push(11);
stack.push(13);

console.log(stack.size()); //3
stack.print(); //1,11,3

console.log(stack.peek());

stack.pop();
stack.print(); //1,11
