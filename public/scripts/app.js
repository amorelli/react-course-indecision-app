'use strict';

/* eslint-disable react-in-jsx-scope */

console.log('app.js is running.');

/* APP START */
var app = {
  title: 'Build-It Visibility Toggle'
};

var visibility = false;

var toggleDetails = function toggleDetails() {
  visibility = !visibility;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggleDetails },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'p',
      null,
      'Hello'
    )
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderApp();
