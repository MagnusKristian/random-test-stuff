import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );




// const root = ReactDOM.createRoot(document.getElementById('root'));
  
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
//   console.log(element);
// }

// setInterval(tick, 1000);






class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);







/*

render() {
    const n = Math.floor(Math.random() * 10 + 1);
    return (
      <>
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>

      <div>{n}</div>

      </>
    );
  }



*/ 