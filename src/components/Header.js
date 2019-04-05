import React, { Component } from 'react';

export default class Header extends Component {
  
    render() {
      return (
        <header id="header" class="clearfix">
            <div class="wrap">
                <div id="logo">
                    <h1 id="site-title">Markdown<span>Editor</span></h1>
                    <p id="site-description">Konvertiere in Echtzeit Markdown zu HTML</p>
                </div>
            </div>
        </header>
      );
    }

}