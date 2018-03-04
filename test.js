const uuid = (() => {
  let id = 1;
  return () => id++;
})();

console.log(uuid());
console.log(uuid());
console.log(uuid());
console.log(uuid());
console.log(uuid());
console.log(uuid());
