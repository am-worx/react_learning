var React = require('react');
var ListItem = require('./ListItem.jsx');

/*var ingredients = [
	{
		"id": 1,
		"text": "Ham"
	},
	{
		"id": 2,
		"text": "Cheese"
	},
	{
		"id": 3,
		"text": "Bread"
	}
];*/

var List = React.createClass({
	render: function() {
		/*var listItems = ingredients.map(function(item){
			return <ListItem key={item.id} ingredients={item.text} />
		});*/

		var createItem = function (text, index) {
			return <ListItem key={index + text} text={text} />
		};

		return (<ul>{this.props.items.map(createItem)}</ul>);
	}
});

module.exports = List;