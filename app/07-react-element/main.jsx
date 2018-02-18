function time() {
    return new Date().toLocaleTimeString();
}



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

