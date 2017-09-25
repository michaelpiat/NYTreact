var React = require("react");

var helpers = require("./utils/helpers");

var Search = React.createClass({
	
  getInitialState: function() {
    return { topic: '', startDate: '', endDate: '', results: ''};
  },

  componentDidUpdate: function() {
    helpers.runSearch(this.state.topic, this.state.startDate, this.state.endDate)
    .then(function(data) {
      this.setState({results: data});

      
    })
  }

  render: function() {
		return (
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="topic" type="text" className="validate" />
                  <label>Topic</label>
                      <div className="input-field col s6">
                        <label>StartDate</label>
                        <input type="text" className="datepicker" />
                      </div>
                    <div className="input-field col s6">
                      <label>EndDate</label>
                      <input type="text" className="datepicker" />
                    </div>
                  
                </div>
              </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>      
            </form>
          
            <div className="results">
                <ul className="collection">
                  <li className="collection-item avatar">
                    <img src="images/yuna.jpg" alt="" className="circle" />
                      <span className="title">Title</span>
                        <p>First Line
                            Second Line
                        </p>
                          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                  </li>
                  <li className="collection-item avatar">
                    <i className="material-icons circle">folder</i>
                      <span className="title">Title</span>
                        <p>First Line 
                          Second Line
                        </p>
                          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                  </li>
                  <li className="collection-item avatar">
                    <i className="material-icons circle green">insert_chart</i>
                      <span className="title">Title</span>
                        <p>First Line
                            Second Line
                        </p>
                          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                  </li>
                  <li className="collection-item avatar">
                    <i className="material-icons circle red">play_arrow</i>
                      <span className="title">Title</span>
                        <p>First Line 
                          Second Line
                        </p>
                          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
              </ul>
            </div>

          </div>	



		)
	}
})

module.exports = Search;