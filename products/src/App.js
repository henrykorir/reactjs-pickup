import React from 'react';
import './logo.svg';
import './App.css';
import Products from './Products.js';
function App() {
  return (
    <div>
		<header className="App-header">
			<h1>My React App</h1>
		</header>
		<section>
			<Products ></Products>
		</section>
    </div>
  );
}

export default App;
