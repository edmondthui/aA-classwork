import React from 'react';
import uniqueId from '../../util/util'

class TodoForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        title: "",
        body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      const {title, body} = this.state;

      this.props.receiveTodo({
          title,
          body,
          id: uniqueId()
      })
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {

    return (
        <form onSubmit={this.handleSubmit}>
        <label>Title
            <input type="text"
            value = {this.state.title}
            onChange={this.update("title")}/>
        </label>

        <label>Body
            <input type="text"
            value = {this.state.body}
            onChange={this.update("body")}/>
        </label>

        <input type="submit" value="New Todo"/>
        </form>
    )
    
  }




}

export default TodoForm;