function time() {
    return new Date().toLocaleTimeString();
}


// Only the diff will be modified in the DOM.
// The DOM will not be naively rewritten.
// This is the advantage of Virtual DOM.
setInterval(() => {
    console.log('tick');
    const element = (
        <div>
            <h2>Date</h2>
            <div>Time : {time()}</div>
        </div>
    );

    ReactDOM.render(element, document.querySelector('#root'));
}, 1000);

setInterval(() => {
    console.log('tick vanilla');

    document.querySelector('#root-vanilla').innerHTML = `
<div>  
    <h2>Date</h2>
    <div>Time : ${time()}</div>
</div>
    `;
}, 1000);

