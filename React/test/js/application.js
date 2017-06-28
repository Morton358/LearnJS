var Hello = React.createClass({
	render: function(){
		return (
			<h1> Hello Worlddd </h1>	
			);
	}
});
ReactDom.render(
	<Hello />,
	document.getElementById('area')
	);