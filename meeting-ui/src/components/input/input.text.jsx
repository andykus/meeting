import Backbone from 'backbone';
import React from 'react';

class InputText extends React.Component {

	constructor(props) {
		super(props);
		this.changeEvent = 'change:' + this.props.prop;
		this.state = { value: '' };
	}

	componentDidMount() {
		this.props.model.on(this.changeEvent, this.updateValueFromModel, this);
	}

	componentWillUnmount() {
		this.props.model.off();
	}

	updateValueFromModel(e, value) {
		this.setState({ value });
	}

	updateValueFromUserInput(e) {
		this.props.model.set(this.props.prop, e.target.value);
	}

	render() {
		return (
			<input value={this.state.value} 
			  	   placeholder={this.props.children} 
			  	   onBlur={this.updateValueFromUserInput.bind(this)} />
	  	);
	}
}

module.exports = InputText;