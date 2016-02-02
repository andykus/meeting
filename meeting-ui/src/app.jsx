import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import NotFound from './notfound.jsx';
import Agenda from './agenda.jsx';

class MeetingApp extends React.Component {
  render() {
    return <h2>Default meeting page!</h2>;
  }
}

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={MeetingApp}>
			<Route path="agenda" component={Agenda}/>
		</Route>
		<Route path="*" component={NotFound}/>
	</Router>
);

document.addEventListener('DOMContentLoaded', () => {
	const appContainer = document.createElement('div');

	document.body.appendChild(appContainer);

	ReactDOM.render(router, appContainer);
});