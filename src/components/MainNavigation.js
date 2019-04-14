import React, { Component } from 'react';

export default class MainNavigation extends Component {
  
    render() {
      return (
          <div>
            <a href="#mainnav" className="mainnav-toggle">
                MENU
            </a>
  
            <nav id="mainnav" className="mainnav">
                <ul>
                    <li><a href="/">Was ist Markdown?</a></li>
                    <li><a href="/editor">Editor</a></li>
                    <li><a href="/syntax">Syntax</a></li>
                </ul>
            </nav>

            <a href="#" className="backdrop"></a>
          </div>
      );
    }

}