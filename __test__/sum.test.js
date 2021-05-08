const sum = require('./sum');
console.log(sum(1, 2));

test('add 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});