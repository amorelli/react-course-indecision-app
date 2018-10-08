/* eslint-disable react-in-jsx-scope */

console.log('app.js is running.');

/* APP START */
const app = {
  title: 'Indecision App',
  subtitle: 'Can\'t decide?',
  options: ['One', 'Two'],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No options.'}</p>
    <ol>
      <li>{app.options[0]}</li>
      <li>{app.options[1]}</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
    count++; 
    renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
