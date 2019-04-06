import React, { Component } from 'react';
import MarkdownEditor from "./MarkdownEditor"
import MarkdownIntro from "./MarkdownIntro"
import ShareButtons from "./ShareButtons"


export default class Main extends Component {
  
    render() {
      return (
        <main className="wrap">
            <section className="content clearfix">
                <MarkdownEditor />
                <MarkdownIntro />
                <ShareButtons />                
            </section>
        </main>
      );
    }

}