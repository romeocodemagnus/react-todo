var React = require('react');
var ReactDOM = require('react-dom');

//provider will provide the store to all components down the line
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});



// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store = {store} >
		<TodoApp />
	</Provider>,
	document.getElementById('app')
);
