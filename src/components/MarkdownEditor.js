import React, { Component } from 'react';
import Remarkable from 'remarkable';

export default class MarkdownEditor extends Component {

    constructor(props) {
      super(props)
      this.state = {
          value: '**Hello World!**'
      }
    }
    
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }
    
    getRawMarkup() {
      const md = new Remarkable()
      return {__html: md.render(this.state.value)}
    }
  
    render() {
      return (
        <div className="md-editor">
          <div className="md-input">
            <strong>Input</strong>
            <p>Enter some markdown</p>
            <textarea id="markdown-content" onChange={this.handleChange} defaultValue={this.state.value}></textarea>
          </div>
          <div className="md-output">
            <strong>Output</strong>
            <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()} />
          </div>
        </div>
      );
    }

}