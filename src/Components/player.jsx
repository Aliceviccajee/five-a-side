import React, { Component } from "react";

class Player extends Component {
constructor(props) {
  super(props)

  this.state = {
    editing: false,
    value: this.props.task.task,
    completed: this.props.task.completed
  }
  //is taking props from tasks component and setting it to value

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleComplete = this.handleComplete.bind(this);
}

  handleEdit() {
    this.setState({
      editing: true,
    })
  }

  handleChange(e) {
    let input = e.target.value
    this.setState({
      value: input
    })
  }//looks at hat the user types and saves it as value

  handleDelete(e) {
    this.props.onDelete();
  }
  //these methods are doing soem logic and then passing through our methods from the container.

  handleSubmit(e) {
    e.preventDefault();
    //taking whatever the user has typed and set it to data.
    let data = this.state.value;
    this.setState({
      editing: false
    })
    this.props.onUpdate(data);
  }

  handleComplete(e) {
    let complete = !this.state.completed //toggles between the two options for completed and not completed and sets to state. setting complete to the opposite of what it is equal to in state.

    this.setState({
      completed: complete //assigning the value to the opposite of what it was before
    })

    this.props.onComplete(complete);//taking that value and passing it into the oncomplate method
  }

  render() {
    const { task } = this.props;// anytime we access something from props, we can do destructuring to not have to type this.props lll the time
    const { editing, value, completed } = this.state;//same same

    let colour = completed ? "lightgrey" : "black";

    return (
      <React.Fragment>
          <input style={{ display: "inline-block" }} onChange={ this.handleComplete } type="checkbox" checked={ completed }></input>
        { editing ?
          <form style={{ display: "inline-block" }} onSubmit={ this.handleSubmit }>
            <input id="task" onChange={ this.handleChange } value={ value }></input>
            <button style={{ margin: "2px" }} className="btn btn-outline-info">Update</button>
          </form>
          :
          <p style={{color: colour, display: "inline-block", marginLeft: "5px", marginRight: "10px" }}>{ task.task }</p> }
        <button onClick={ this.handleEdit } style={{ margin: "4px" }} className="btn btn-outline-warning" disabled={ completed }>Edit</button>
        <button onClick={ this.handleDelete } style={{ margin: "4px" }} className="btn btn-outline-danger">Delete</button>
      </React.Fragment>
    ) //if we're in editing mode display the value in the form, if not display the value in the p tag and disable the edit button.
  }
}

export default Player;
