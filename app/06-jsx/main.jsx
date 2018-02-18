// warning: use 

// warning: do not render unknown HTML5 element.
const e1 = <toto />;
console.log('e1', e1);

// error: do not render element starting with uppercase (considered as component)
// const e2 = <Toto />;
// console.log('e2', e2);

// warning: do not use attribute class, use className.
const e3 = <h1 titi="tata" class="hello" />;
console.log('e3', e3);

// ok
// use parenthesis for multiline JSX
const e4 = (
<div className="hello">
    Coucou !!!
</div>
);
console.log('e4', e4);

// error: an enclosing tag must be used.
// const e5 = <h1/><h2/>;

function add(a, b) {
    return a + b;
}

// use of expression inside TextElement
const e6 = <div>1+2={add(1,2)}</div>;
console.log('e6', e6);

const src = '../img/react.svg';

// use of expression inside attribute
const e7 = <img width="100" src={src} />;
console.log('e7', e7);

// render the JSX element you want.
ReactDOM.render(
    e7, document.getElementById('root'));