var React = require('react');
var ReactDOM = require('react-dom');

//provider will provide the store to all components down the line
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	var state = store.getState();
  	console.log('New state', state);

  	TodoAPI.setTodos(state.todos);
});

//initialize todos with items in store
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

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
