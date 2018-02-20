// 1) Do not render unknown HTML5 element (warning).
const e1 = <toto>test1</toto>;
console.log('e1', e1);
ReactDOM.render(
    e1, document.getElementById('root1'));

// 2) Do not render element starting with uppercase (considered as component) (error)
// const e2 = <Toto />;
// console.log('e2', e2);

//3) Do not use attribute 'class', use 'className' instead. (warning)
const e3 = <h1 titi="tata" class="hello" >Hello</h1>;
console.log('e3', e3);
// raise a warning.
ReactDOM.render(
    e3, document.getElementById('root3'));

// 4) Better should use parenthesis for wrapping multiline JSX
// this is ok
const e4 =
    <div className="hello">
        Coucou !
</div>
    ;
console.log('e4', e4);
ReactDOM.render(
    e4, document.getElementById('root4'));

// but this is not ! Not because of JSX but because of multiline return behavior.
// specialist call that : automatic semicolon insertion
// http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/
function getE4_1() {
    return
    <div className="hello">
        Coucou !
</div>
        ;
}
console.log('e4.1', getE4_1());

function getE4_2() {
    return (
        <div className="hello">
            Coucou !
</div>)
        ;
}
console.log('e4.2', getE4_2());


// 5) Always use an enclosing tag. (error)
// const e5 = <h1/><h2/>;

function add(a, b) {
    return a + b;
}

// 6) Javascript expression can be used inside TextElement.
const e6 = <div>1+2={add(1, 2)}</div>;
console.log('e6', e6);

const src = '../img/react.svg';
ReactDOM.render(
    e6, document.getElementById('root6'));

// 7) Javascript expression can be used inside attribute.
const e7 = <img width="100" toto="{src}" src={src} />;
console.log('e7', e7);

ReactDOM.render(
    e7, document.getElementById('root7'));

// 8) Self closing tag are permitted.
const e8 = <div />;
console.log('e8', e8);

ReactDOM.render(
    e8, document.getElementById('root8'));

// 9) Dot notation for element is permitted, but not [] notation.
const module = {
    toto: 'h1',
};
const e9 = <module.toto>coucou</module.toto>;
console.log('e9', e9);
ReactDOM.render(
    e9, document.getElementById('root9'));

// [] notation does not work in JSX.
// <module['toto']>coucou</module['toto']>;

// 10) Spread attribute
const props = {firstname: 'Dany', lastname: 'Phengsiaroun'};
const e10 = <div {...props} />;
console.log('e10', e10);
ReactDOM.render(
    e10, document.getElementById('root10'));