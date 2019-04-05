import React, { Component } from 'react';

export default class Footer extends Component {
  
    render() {
      return (
        <footer>
            <div id="footer">
                <p>
                    &copy; <a href="https://peter-stuhlmann-webentwicklung.de/">Peter R. Stuhlmann Webentwicklung</a>, 2019
                </p>
                <nav className="footernav">
                    <ul id="menu-footer" className="menu">
                        <li><a href="https://github.com/peter-stuhlmann/">Github</a></li>
                        <li><a href="./impressum.html">Impressum</a></li>
                        <li><a href="./datenschutzerklaerung.html">Datenschutzerklärung</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
      );
    }

}