/* eslint-disable */

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.state = { visible: false };
  }
  toggleDetails() {
    this.setState((state) => {
      return { visible: !state.visible };
    });
  }
  render() {
    return (
      <div>
      <h1>Build-It Visibility Toggle</h1>
      <button onClick={this.toggleDetails}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
      {this.state.visible && <p>These are some details!</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// let visibility = false;

// const toggleDetails = () => {
//   visibility = !visibility;
//   renderApp();
// };

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Build-It Visibility Toggle</h1>
//       <button onClick={toggleDetails}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//       {visibility && <p>Hello</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');

// renderApp();
