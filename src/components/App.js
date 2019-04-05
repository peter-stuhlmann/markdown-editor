import React, { Component } from 'react';
import Header from "./Header"
import MarkdownEditor from "./MarkdownEditor"
import Footer from "./Footer"


class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <MarkdownEditor />
            <Footer />
        </div>
    );
  }
}

export default App;