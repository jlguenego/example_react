
// impure function (because it modified its input)
function total(object, amount) {
    if (object.total) {
        object.total += amount;
    } else {
        object.total = amount;
    }
    console.log('object.total', object.total);
}

const object = {};

console.log('Exemple of impure function');

total(object, 3);
total(object, 4);

// other input function because the output depends on other things than its input.
function randomx(x) {
    return Math.random() + x;
}

console.log('randomx(2)', randomx(2));
console.log('randomx(2)', randomx(2));
console.log('randomx(2)', randomx(2));


