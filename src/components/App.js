import React, { Component } from 'react';
import Header from "./Header"
import MarkdownEditor from "./MarkdownEditor"

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <MarkdownEditor />
        </div>
    );
  }
}

export default App;