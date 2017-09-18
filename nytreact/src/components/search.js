var React = require("react");

var Search = React.createClass({
	render: function() {
		return (
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="topic" type="text" className="validate">
                  <label for="topic">Topic</label>
                  <input type="text" class="datepicker">
                  <input type="text" class="datepicker">
                </div>
              </div>
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>      
            </form>

            <div className="results">
                <ul class="collection">
                  <li class="collection-item avatar">
                    <img src="images/yuna.jpg" alt="" class="circle">
                      <span class="title">Title</span>
                        <p>First Line <br>
                            Second Line
                        </p>
                          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                  </li>
                  <li class="collection-item avatar">
                    <i class="material-icons circle">folder</i>
                      <span class="title">Title</span>
                        <p>First Line <br>
                          Second Line
                        </p>
                          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                  </li>
                  <li class="collection-item avatar">
                    <i class="material-icons circle green">insert_chart</i>
                      <span class="title">Title</span>
                        <p>First Line <br>
                            Second Line
                        </p>
                          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                  </li>
                  <li class="collection-item avatar">
                    <i class="material-icons circle red">play_arrow</i>
                      <span class="title">Title</span>
                        <p>First Line <br>
                          Second Line
                        </p>
                          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                </li>
              </ul>
            </div>

          </div>	



		)
	}
})

module.exports = Search;