# modern-radio-buttons
`RadioSet` is a react component that allows the user to customize their radio buttons through images for a better user experience, while still getting the same functionality.

## Visuals
The use of these radio buttons allow the user to input their own images as the blank and checked radio buttons, in a layout they feel is necessary for their project. Below is an example of these radio buttons in a horizontal layout with svg files customized for this example.
![Alt text](images/Horizontal.png?raw=true "Horizontal")

Similar to this horizontal layout, these buttons can also be layed out vertically, as displayed in another image below.
![Alt text](images/Vertical.png?raw=true "Vertical")

## Installatoin
TBD

## Usage
The given code snippet demonstrates how to utilize the `RadioSet` module in another component.

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import fill from './Fill.svg'
import blank from './Blank.svg'
import './App.css';
import RadioSet from 'modern-radio-buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RadioSet
          options={["One", "Two"]}
          horizontal={false}
          fill={ fill }
          blank={ blank }
          size="32px"
        />
      </div>
    );
  }
}

export default App;
```
