import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Header from './components/header.jsx';
import Navigation from './components/navigation.jsx';
import Agenda from './views/agenda.jsx';
import Overview from './views/overview.jsx';
import NotFound from './views/notfound.jsx';

class MeetingApp extends React.Component {
   render() {
      return (
         <div>
            <Header>
               <Navigation/>
            </Header>

            {this.props.children}

         </div>
      );
   }
}

const router = (
   <Router history={hashHistory}>
      <Route path="/" component={MeetingApp}>
         <IndexRoute component={Overview}/>
         <Route path="agenda" component={Agenda}/>
         <Route path="*" component={NotFound}/>
      </Route>
   </Router>
);

document.addEventListener('DOMContentLoaded', () => {
   const appContainer = document.createElement('div');

   document.body.appendChild(appContainer);

   ReactDOM.render(router, appContainer);
});