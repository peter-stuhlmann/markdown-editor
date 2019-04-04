import React, { Component } from 'react';
import Remarkable from 'remarkable';

export default class MarkdownEditor extends Component {

    constructor(props) {
      super(props)
      this.state = {
          value: '**Hello World!**'
      }
    }
  
    render() {
      return (
        <div className="App">
          <h1>Markdown Editor</h1>
          <h2>Input</h2>
          <p>Enter some markdown</p>
          <textarea id="markdown-content" defaultValue={this.state.value}></textarea>
          <h2>Output</h2>
          <div className="content" />
        </div>
      );
    }

}