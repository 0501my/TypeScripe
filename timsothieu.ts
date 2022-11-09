const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [2, 3, 5, 7, 9]
a
    .filter(value => b.indexOf(value) < 0)
    .forEach(value => console.log(value))