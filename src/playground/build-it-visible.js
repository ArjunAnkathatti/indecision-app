console.log('app.js is running');

const appRoot = document.getElementById('app');

let visible = false;

const toggleVisibility = () => {
    visible = !visible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Straiht</h1>
            <button onClick={toggleVisibility}>
                {visible ? 'Hide details' : 'Show details'}
            </button>
            {visible && (
                <div>
                    <p>more aobu this is displayed here</p>
                </div>
            )}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
    
}

render();





