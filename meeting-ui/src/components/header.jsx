import React from 'react';
import { Link } from 'react-router';
import { Menu, MenuItem, Row, Column, Link as Button, Sizes, Colors, Icon } from 'react-foundation';

class Header extends React.Component {
   render() {
   		console.log('asd');
      return (
         <div className="header">
			<Row className="display">
				<Column small={2}><h3>Meetπing</h3></Column>
				<Column small={7}>
					<Menu>
						<MenuItem isActive><Link to="/">Överblick</Link></MenuItem>
						<MenuItem><Link to="agenda">Agendor</Link></MenuItem>
						<MenuItem><Link to="notfound">Mötesprotokoll</Link></MenuItem>
					</Menu>
				</Column>
				<Column small={3}>
				  <Button color={Colors.SECONDARY}>Nytt möte &nbsp; <Icon name="fi-plus"/></Button>
				  &nbsp;
				  <Button color={Colors.PRIMARY}>Ny agenda &nbsp; <Icon name="fi-plus"/></Button>
				</Column>
			</Row>
         </div>
      );
   }
}

module.exports = Header;
