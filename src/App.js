import React, { Component } from 'react';
import PropTypes from 'prop-types'
//import logo from './logo.svg';
//import './App.css';

const App = () => {
  const profiles= [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 20},
    { name: "Inoue", age: 19}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
