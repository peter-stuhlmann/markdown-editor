import React, { Component } from 'react';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import ReactMetaTags from "./MetaTags"


class MDEditor extends Component {
  render() {
    return (
        <div>
            <ReactMetaTags />
            <Header />
            <Main />
            <Footer />
        </div>
    );
  }
}

export default MDEditor;