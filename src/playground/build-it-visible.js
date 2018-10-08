/* eslint-disable react-in-jsx-scope */

console.log('app.js is running.');

/* APP START */
const app = {
  title: 'Build-It Visibility Toggle',
};

let visibility = false;

const toggleDetails = () => {
  visibility = !visibility;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleDetails}>{visibility ? 'Hide Details' : 'Show Details'}</button>
      {visibility && <p>Hello</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderApp();
