// 3 Main Operations
// 1. Set to store a key-value pair
// 2. Get to retrieve a value given its key
// 3. Remove to delete a key value pair
// 4. hashing function to convert a string key to a numeric number

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(value, key) {
    let index = this.hash(key);
    this.table[index] = value;
  }
  get(  ) {
    const index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const table = new HashTable(50);

table.set("name", "JavaScript");
table.set("age", 27);
table.set("creator", " Brendan Eich");

table.display();

console.log(table.get());
