import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ColoredBlock from './ColoredButton.js';
export class MyComponent extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		console.log("Click");
	}
	render(){
		return(
			<button onClick = {this.handleClick}>
				click me
			</button>
		)
	}
}
export class Color extends React.Component{
	render(){
		return(
			<div className ="App">
				<header><h1>My React App</h1></header>
				<div className="main-content">
					<ColoredBlock />
				</div>
				<footer>...</footer>
			</div>
		);
	}
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.name}!
        </p>
		<Clock></Clock>
      </div>
    );
  }
}
export default App;
