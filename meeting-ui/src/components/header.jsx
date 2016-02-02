import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Meeting</h1>
				{this.props.children}
			</div>
		);
	}
}

module.exports = Header;
