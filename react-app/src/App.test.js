import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App name="Henry"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
