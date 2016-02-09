import React from 'react';
import InputText from '../components/input/input.text.jsx';

class Agenda extends React.Component {
   render() {
      return (
      	<div>
	      	<h3>Agenda</h3>
	      	<InputText model={new Backbone.Model()} prop="myProp">Titel</InputText>
      	</div>
	  );
   }
}

module.exports = Agenda;
