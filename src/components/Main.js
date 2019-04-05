import React, { Component } from 'react';
import MarkdownEditor from "./MarkdownEditor"


export default class Main extends Component {
  
    render() {
      return (
        <main className="wrap">
            <section className="content clearfix">
                <MarkdownEditor />
            </section>
        </main>
      );
    }

}