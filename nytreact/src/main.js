var React = require("react");

var Saved = require("./components/saved.js");
var Search = require("./components/search.js");

var helpers = require("./utils/helpers.js");

var Main = React.createclass({
	render: function() {
		return (
			<div className="container">
        		<nav class="nav-extended">
    				<div class="nav-content">
      					<span class="nav-title">Title</span>
       				</div>
  				</nav>

  				<div className="search">
  					<Search />
  				</div>

  				<div className="search">
  					<Saved />
  				</div>





      		</div>





		)
	}
})

module.exports = Main;