var my_news = [
{
	author: 'George Bucker',
	text: 'Children`s messages in CloudPets data breach',
	big_text: 'An open database containing links to more than 2 million voice messages recorded on cuddly toys has been discovered, cybersecurity researcher Troy Hunt has revealed.'
},
{
	author: 'Ann Fisher',
	text: 'At the train which goes from Douthland to Scotland ..',
	big_text: 'people recognise in student of Harvard the copy of Harry Potter and Wheezlee'
},
{
	author: 'Joann Rolling',
	text: 'something interesting',
	big_text: 'Boston Dynamics has revealed its latest robot - a machine that can jump over obstacles and roll over uneven surfaces. The US-based company is owned by Alphabet, the parent of Google.'
}
];

var Article = React.createClass({
	propTypes: {
    dataset: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      big_text: React.PropTypes.string.isRequired
    }),
    },
  	/*getInitialState: function() {
    	return { 
      		visible: false
    	};
  	},*/

  	
    
	render: function() {
		var author = this.props.dataset.author;
		var text = this.props.dataset.text;
		var big_text = this.props.dataset.big_text;
		//var visible = this.state.visible;
		return (
			<div className="article">
				<p className="news__author">{author}:</p>
				<p className="news__text">{text}</p>
				<a href="#" className='news__readmore'> More </a>
				<p className="news__big_text">{big_text}</p>
			</div>

			)
	}
	});


var News = React.createClass({
	 propTypes: {
    data: React.PropTypes.array.isRequired
  },
	render: function() {
		var data = this.props.data;
		var newsTemplate;
		if (data.length > 1) {
			newsTemplate = data.map(function(item, index) {
			return (

				<div key={index}>
					<Article dataset={item} />
				</div>
					)
				})
		
		} 
		else {
			newsTemplate = <p> Its a pity but we dont have any news today! </p>
		}
	return (
			<div className="news">
				{newsTemplate}
			<strong className={'news__count ' + (data.length > 0 ? '':'none') }>Count of News: {data.length}</strong>
			</div>	
		);
	}
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h3>News</h3>
        <News data={my_news}/> {/*adding property data*/}
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
