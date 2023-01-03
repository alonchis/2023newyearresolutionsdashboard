import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Item extends React.Component {
    render() {
        return (
                <dd><input type="checkbox"/></dd>
        );
    }
}

function List(props)  {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <Item></Item>
    );
    return (
        <div class="center">
            <dl>
                <div><dt>{props.title}</dt></div>
                <div>{listItems}</div>
            </dl>
        </div>
    );

}

function App() {
    const numbers = [1, 2, 3, 4, 5]
    const numbers2 = [550, 600, 650]
    const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const numbers4 = [295, 290, 285, 280, 275]
    const numbers5 = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000]
    const numbers6 = [1, 2, 3]
    const numbers7 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

    const numbers8 = []
    for (let i = 1; i <= 52; i++) {
        numbers8.push(i)
    }
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  /!*<p>*!/*/}
      {/*  /!*  Edit <code>src/App.js</code> and save to reload.*!/*/}
      {/*  /!*</p>*!/*/}
      {/*</header>*/}
        <div className="Item" class="container">
            <List title="Write, edit, or delete 10k lines of code" numbers={numbers2}/>
        </div>
        <div className="Item" className="container">
            <List title="650 meet PR" numbers={numbers3}/>
        </div>
        <div className="Item" className="container">
            <List title="Read one book a month" numbers={numbers4}/>
        </div>
        <div className="Item" className="container">
            <List title="Body weight of 275 lbs" numbers={numbers5}/>
        </div>
        <div className="Item" className="container">
            <List title="Get Certified" numbers={numbers6}/>
        </div>
        <div className="Item" className="container">
            <List title="Invest 500k" numbers={numbers7}/>
        </div>
        <div className="Item" className="container">
            <List title="watch more Movies" numbers={numbers8}/>
        </div>

    </div>
  );
}

export default App;
