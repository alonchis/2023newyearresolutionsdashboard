import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Item extends React.Component {
    render() {
        return (
                <li><input type="checkbox"/></li>
        );
    }
}

function List(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <Item></Item>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function App() {
    const numbers = [1, 2, 3, 4, 5]

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  /!*<p>*!/*/}
      {/*  /!*  Edit <code>src/App.js</code> and save to reload.*!/*/}
      {/*  /!*</p>*!/*/}
      {/*</header>*/}
        <div className="Item" class="container">

            <List title="test tile" numbers={numbers}/>
            {/*{List numbers={numbers}}*/}
        </div>
    </div>
  );
}

export default App;
