// Set is a pre-defined data Structure

const set = new Set([1, 3, 5, "JavaScript"]);

set.add(7);// Add 7 at last
console.log(set.has(2)); //false
console.log(set.size);// Get the size of the set. 
set.delete(1);

for (const item of set) {
  console.log(item);
}

set.clear();// Delete all the value from the set.

for (const item of set) {
  console.log(item);
}
