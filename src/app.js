var React = require('react');
var ReactDom = require('react-dom');
var JQGrid = require('./components/jqgrid');

var Main = React.createClass({
	render: function() {
		return (
			<div>Hello World</div>
		)
	}
});

ReactDom.render(<Main />, document.getElementById('app'));
ReactDom.render(<JQGrid />, document.getElementById('jqgrid'));