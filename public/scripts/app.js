console.log('App.js is running!');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
  'p',
  null,
  'saldkfjlaskjf'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);