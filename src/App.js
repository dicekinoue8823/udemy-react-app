import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

const App = () => {
  const profiles= [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 20},
    { name: "Inoue"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={profile.index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
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
