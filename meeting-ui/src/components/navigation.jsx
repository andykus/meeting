import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to="agenda">Agenda</Link></li>
            </ul>
         </div>
      );
   }
}

module.exports = Navigation;
