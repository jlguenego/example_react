// 1) Do not render unknown HTML5 element (warning).
const e1 = <toto />;
console.log('e1', e1);

// 2) Ddo not render element starting with uppercase (considered as component) (error)
// const e2 = <Toto />;
// console.log('e2', e2);

//3) Do not use attribute 'class', use 'className' instead. (warning)
const e3 = <h1 titi="tata" class="hello" />;
console.log('e3', e3);
// raise a warning.
ReactDOM.render(
    e3, document.getElementById('root'));

// 4) Better should use parenthesis for wrapping multiline JSX
// this is ok
const e4 =
    <div className="hello">
        Coucou !!!
</div>
    ;
console.log('e4', e4);

// but this is not ! Not because of JSX but because of multiline return behavior.
// specialist call that : automatic semicolon insertion
// http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/
function getE4_1() {
    return
    <div className="hello">
        Coucou !!!
</div>
        ;
}
console.log('e4.1', getE4_1());

function getE4_2() {
    return (
        <div className="hello">
            Coucou !!!
</div>)
        ;
}
console.log('e4.2', getE4_2());


// 5) Always use an enclosing tag. (error)
// const e5 = <h1/><h2/>;

function add(a, b) {
    return a + b;
}

// 6) use of expression inside TextElement
const e6 = <div>1+2={add(1, 2)}</div>;
console.log('e6', e6);

const src = '../img/react.svg';

// 7) use of expression inside attribute
const e7 = <img width="100" toto="{src}" src={src} />;
console.log('e7', e7);

// render the JSX element you want.
ReactDOM.render(
    e7, document.getElementById('root'));

// 8) self closing tag permitted.
const e8 = <div />;
console.log('e8', e8);

// 9) dot notation
const module = {
    toto: 'h1',
};
const e9 = <module.toto>coucou</module.toto>;
console.log('e9', e9);
ReactDOM.render(
    e9, document.getElementById('root'));

