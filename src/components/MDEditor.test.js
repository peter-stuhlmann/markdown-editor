import React from 'react';
import ReactDOM from 'react-dom';
import MDEditor from './MDEditor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MDEditor />, div);
  ReactDOM.unmountComponentAtNode(div);
});
