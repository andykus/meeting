import React from 'react';
import { Link } from 'react-router';
import { Menu, MenuItem } from 'react-foundation';

class Navigation extends React.Component {
   render() {
      return (
		<Menu>
			<MenuItem isActive><Link to="agenda">Agenda</Link></MenuItem>
			<MenuItem><a>About</a></MenuItem>
			<MenuItem><a>Nachos</a></MenuItem>
		</Menu>
      );
   }
}

module.exports = Navigation;
