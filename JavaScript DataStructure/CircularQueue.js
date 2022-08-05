class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  empty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
    }
    if (this.front === -1) {
      this.front = this.rear;
    }
  }
  dequeue() {
    if (this.empty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.empty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek() {
    if (!this.empty()) {
      return this.items[this.front];
    }
    return null;
  }
  print() {
    if (this.empty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.empty()); //True

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.print(); // 10,20,30,40,50

queue.dequeue();

queue.print(); //20,30,40,50

console.log(queue.peek()); //20

console.log(queue.isFull()); //false
