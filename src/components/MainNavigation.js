import React, { Component } from 'react';

export default class MainNavigation extends Component {
  
    render() {
      return (
          <React.Fragment>
            <a href="#mainnav" className="mainnav-toggle">
                <span className="fas fa-bars"></span>
            </a>
  
            <nav id="mainnav" className="mainnav">
                <ul>
                    <li><a href="/">Was ist Markdown?</a></li>
                    <li><a href="/editor">Editor</a></li>
                    <li><a href="/syntax">Syntax</a></li>
                </ul>
            </nav>

            <a href="#" className="backdrop"></a>
          </React.Fragment>
      );
    }

}