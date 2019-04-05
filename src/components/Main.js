import React, { Component } from 'react';
import MarkdownEditor from "./MarkdownEditor"


export default class Main extends Component {
  
    render() {
      return (
        <main id="wrap">
            <section id="content" className="clearfix">
                <MarkdownEditor />
            </section>
        </main>
      );
    }

}