var $ = require('jquery');

module.exports = {
	setTodos: function(todos){
		if ($.isArray(todos)) {
			//stringify as local storage cannot save arrays
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function(){
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch(e){

		}
		return $.isArray(todos) ? todos : [];
	}
};