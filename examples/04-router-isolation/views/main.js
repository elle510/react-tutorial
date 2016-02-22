var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    clickHandler: function(url, event) {
        this.props.onClick(event, url);
    },
    render: function() {
        var repoClick = this.clickHandler.bind(this, '#/repo');
        return (
            <div>
                <h1>App 04</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li onClick={repoClick}>Repos</li>
                    <li onClick={this.clickHandler.bind(this, "#/repo")}>Repos</li>
                </ul>
            </div>
        )
    }
});