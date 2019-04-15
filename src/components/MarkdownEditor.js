import React, { Component } from 'react';
import Remarkable from 'remarkable';
import ShareButtons from "./ShareButtons"

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
        <React.Fragment>
          <div className="md-editor">
            <div className="md-input">
              <strong>Input</strong>
              <p>Gebe hier Text mit Markdown-Syntax ein:</p>
              <textarea className="unconverted-text" onChange={this.handleChange} defaultValue={this.state.value}></textarea>
            </div>
            <div className="md-output">
              <strong>Output</strong>
              <p>Formatiertes Ergebnis Deiner Eingabe:</p>
              <div className="converted-text" dangerouslySetInnerHTML={this.getRawMarkup()} />
            </div>
          </div>
          <ShareButtons />
        </React.Fragment>
      );
    }

}