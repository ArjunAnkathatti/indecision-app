'use strict';

console.log('app.js is running');

var appRoot = document.getElementById('app');

var visible = false;

var toggleVisibility = function toggleVisibility() {
    visible = !visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Straiht'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visible ? 'Hide details' : 'Show details'
        ),
        visible && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'more aobu this is displayed here'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
