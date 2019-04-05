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
                    <li><a href="#">Link I</a></li>
                    <li><a href="#">Link II</a></li>
                    <li><a href="#">Link III</a></li>
                    <li><a href="#">Link IV</a></li>
                </ul>
            </nav>

            <a href="#" className="backdrop"></a>
          </div>
      );
    }

}