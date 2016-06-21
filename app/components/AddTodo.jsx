
var React = require('react');


var AddTodo = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var todoText = this.todoTextInput.value;

		if (todoText.length > 0){
			this.todoTextInput.value = '';
			this.props.onAddTodo(todoText);
		}else{
			this.todoTextInput.focus();
		}
	},
	render: function () {

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
		        	<input 
		        		type="text" 
		        		ref={(c) => this.todoTextInput = c} 
		        		placeholder="What do you need to do?"
		        	/>
		        	<button 
		        		className="button expanded"
		        	>
		        		Add Todo
		        	</button>
		        </form>
			</div>
		);
	}
});

module.exports = AddTodo;