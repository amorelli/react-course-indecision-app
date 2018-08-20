console.log('app.js is running.');

const template = <h1>This is new JSX from app.js</h1>;
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
