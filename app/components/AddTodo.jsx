
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var {dispatch} = this.props;
		var todoText = this.todoTextInput.value;

		if (todoText.length > 0){
			this.todoTextInput.value = '';
			dispatch(actions.addTodo(todoText));
		}else{
			this.todoTextInput.focus();
		}
	},
	render: function () {

		return (
			<div className="container__footer">
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
export default connect() (AddTodo);
