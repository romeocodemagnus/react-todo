var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect'); 
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});
	it('should call onSearch with entered input text', () => {
		var searchText = 'Dog';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
		var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.searchTextInput.value = searchText;
		TestUtils.Simulate.change(todoSearch.searchTextInput);

		expect(spy).toHaveBeenCalledWith(false, searchText);
	});
	it('should call onSearch with proper checked value', () => {
		var searchText = '';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
		var showCompleted = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
		var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.searchTextInput.value = searchText;
		todoSearch.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.showCompleted);

		expect(spy).toHaveBeenCalledWith(true, searchText);
	});
});