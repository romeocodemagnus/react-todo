var React = require('react');


var TodoSearch = React.createClass({
	handleSearch: function(e){
		var showCompleted = this.showCompleted.checked;
		var searchText = this.searchTextInput.value;

		this.props.onSearch(showCompleted, searchText);
	},
	render: function () {
		return (
			<div>
				<div>
					<input 
		        		type="search" 
		        		ref={(c) => this.searchTextInput = c} 
		        		placeholder="Search todos"
		        		onChange={this.handleSearch}
		        	/>
				</div>
				<div>
					<label>
						<input 
							type="checkbox"
							ref={(c) => this.showCompleted = c} 
		        			onChange={this.handleSearch}
		        		/>
		        		Show completed Todos
					</label>
				</div>
			</div>
		);
	}
});

module.exports = TodoSearch;