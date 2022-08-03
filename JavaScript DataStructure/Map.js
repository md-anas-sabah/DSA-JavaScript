// Map is pre-defined Data Structure in JavaScript

const map = new Map([
  ["a", 1],
  ["b", 1],
]);
map.set("c", 3); // Add key value pair in Map
map.set("d", 4); // Add key value pair in Map

map.delete("d"); // Delete a key-value pair

for (const [key, value] of map) {
  console.log(`${key}:${value} `);
}
console.log(map.has("a")); //Find
console.log(map.size); // Returns Size
map.clear(); // Clear the map
