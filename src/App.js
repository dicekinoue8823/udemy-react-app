import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}
//class App extends Component {
//  render() {
//    return (
//      <React.Fragment>
//        <label htmlFor="bar">
//          bar
//        </label>
//        <input type="text" onClick={ () => {console.log("I am clicked!")}} />
//      </React.Fragment>
//    )
    //return <input type="text" onClick={ () => {console.log("I am clicked!")}} />;
    //const greeting = "Hi!!"
    //const dom = <h1 className="foo">{greeting}</h1>;
    //return dom;
//  }
//}


export default App;
