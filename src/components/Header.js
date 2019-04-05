import React, { Component } from 'react';
import MainNavigation from "./MainNavigation"

export default class Header extends Component {
  
    render() {
      return (
        <header id="header" className="clearfix">
            <div className="wrap">
                <div id="logo">
                    <h1 id="site-title">Markdown<span>Editor</span></h1>
                    <p id="site-description">Konvertiere in Echtzeit Markdown zu HTML</p>
                </div>
            </div>
            <MainNavigation />
        </header>
      );
    }

}