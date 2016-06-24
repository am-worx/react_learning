var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({
	onChange: function(e) {
		console.log(e);
		document.elemmm = e;
		validator.validate(e.value);
	},
	render: function() {
		return (
			<div className="form-group">
				<input type="email" onChange={this.onChange} placeholder="Email"/>
			</div>
		);
	}
});

module.exports = EmailField;