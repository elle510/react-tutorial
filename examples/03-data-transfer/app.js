// Component Data Transfer
// Communicate Between Components
'use strict';

var React = require('react');
var ReactDom = require('react-dom');

var Props = require('./components/Props');

var Main = React.createClass({
	onChangeIndex: function() {
		var index = this.state.index;
		if(index < 10) {
			this.setState({index: ++index});
		}else {
			
			this.setState({index: 0});
		}
	},
	onChangeButtonLabel: function() {
		var label;
		if(this.state.name === '버튼') {
			this.setState({name: 'Submit'});
		}else {
			this.setState({name: '버튼'});
		}
	},
	onChangeDisabled: function() {
		var disabled = !this.state.disabled;
		this.setState({disabled: disabled});
	},
	getInitialState: function() {
        return {name: '버튼', index: 0, disabled: false};
    },
    render: function() {
        return (
            <div>
            	<Props name={this.state.name} index={this.state.index} disabled={this.state.disabled} />
            	<br/>
            	<button onClick={this.onChangeIndex}>Index 변경</button>{'\u00A0'}
            	<button onClick={this.onChangeButtonLabel}>Button Label 변경</button>{'\u00A0'}
            	<button onClick={this.onChangeDisabled}>Enable/Disabled</button>
            </div>
        );
    }
});

ReactDom.render(<Main />, document.getElementById('props'));