
// function impure
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

