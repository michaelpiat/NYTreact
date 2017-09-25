var React = require("react");

var Saved = require("./children/saved.js");
var Search = require("./children/search.js");


var Main = React.createClass({
	
  componentDidMount: function() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
  },





  render: function() {
		return (
			<div className="container">
        		<nav className="nav-extended">
    				<div className="nav-content">
      					<span className="nav-title">Title</span>
       				</div>
  				</nav>

  				<div className="search">
  					<Search />
  				</div>

  				<div className="saved">
  					<Saved />
  				</div>





      		</div>





		)
	}
})

module.exports = Main;