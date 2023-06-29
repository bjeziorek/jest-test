const sum = require('./sum.js');

test('dodawanie',()=>{
    expect(sum(8,8))
    .toBe(16);
});