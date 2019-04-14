import React, { Component } from 'react';
import Header from "./Header"
import Footer from "./Footer"
import ReactMetaTags from "./MetaTags"
import MarkdownIntro from './MarkdownIntro'
import MarkdownEditor from './MarkdownEditor'
import MarkdownSyntax from "./MarkdownSyntax"



class MDEditor extends Component {
  render() {
    return (
        <Router>
            <ReactMetaTags />
            <Header />
            <Route exact path="/" component={ MarkdownIntro } />
            <Route path="/editor" component={ MarkdownEditor } />
            <Route path="/syntax" component={ MarkdownSyntax } />            
            <Footer />
        </Router>
    );
  }
}

export default MDEditor;