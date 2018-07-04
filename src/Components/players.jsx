import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Player from '../containers/player'

//task component that shows  list of tasks
class Players extends Component {
  //constructor requires props and super props
  constructor (props) {
    super(props);
    //because we're binding functions and using local state we have to declair the contructor
    this.state = {
      value: ""
    } //input value is empty

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }//binding

  componentDidMount() {
    this.props.onLoad();
  }//componentDidMount is a lifecycle method, they allow us to pause loading and add a function at that time. Onload calls this which is set in continer = onLoad: () => dispatch(getTasks()),

  handleChange(e) {
    let input = e.target.value
    this.setState({
      value: input
    })
  }
//local function that takes the input value and assigns it to state value.

  handleSubmit(e) {
    e.preventDefault();
    //We want to prevent default on form, so when the user submits a new task it doesn't refreash the page until the code below has run.
    let data = this.state.value;
    this.props.onSubmit(data);
    this.setState({
      value: ""
    })
  }
  //data is being set to the value of state, which is the input value. We are passing data through onSubmit. Then we reset the value to nothing ready for the next task.

  render() {
    let { player } = this.props;
    const { value } = this.state;
    //redner is another lifecycle method. If we need variable or props then we access them here.

    return(//everything. setting the right methods on the right buttons. (methods are functions that live inside an object, and they use . notation)
      <React.Fragment>
        <form style={{ textAlign: "center", marginBottom: "25px" }} onSubmit={ this.handleSubmit }>
          <label htmlFor="task" style={{ display: "block" }}>Add a Player: </label>
          <input id="task" onChange={ this.handleChange } value={ value }></input>
          <button className="btn btn-outline-success" style={{ margin: "4px" }}>Add</button>
        </form>
        { /* check there are articles to show */ }
        { players.length ?
          <ul className="list-group">
            { /* map over each article and display a list item for each one */ }
            { players.map(task => (
              <li className="list-group-item" key={ task.id }>
              { /* link to the task using its id */ }
              { /* task.task is getting the task value from the task object */}
                <Player player={ player }/>
              </li>
            ))}
          </ul> :
          <p>Add a Player!</p>
        }
      </React.Fragment>
    )//we're saying that if length exists then we create a list, if not we print no tasks found.
  }
};


export default Player;
