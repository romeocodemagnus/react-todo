var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
	render: function () {
		var {dispatch, showCompleted, searchText} = this.props;
		return (
			<div className="container__header">
				<div>
					<input 
		        		type="search" 
		        		ref={(c) => this.searchTextInput = c} 
		        		placeholder="Search todos"
		        		value={searchText} 
		        		onChange={() => {
              				var searchText = this.searchTextInput.value;
              				dispatch(actions.setSearchText(searchText));
            			}}
		        	/>
				</div>
				<div>
			        <label>
			            <input 
			            type="checkbox" 
			            ref={(c) => this.showCompleted = c} 
			            checked={showCompleted}
			            onChange={() => {
				            dispatch(actions.toggleShowCompleted());
				        }}
				    />
			            Show completed todos
			        </label>
		        </div>
			</div>
		);
	}
});

export default connect(
  (state) => {
  	//show only data this component needs
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
