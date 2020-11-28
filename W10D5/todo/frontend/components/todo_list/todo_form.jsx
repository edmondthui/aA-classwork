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

      
      this.props.createTodo({
          title,
          body,
          id: uniqueId()
      }).then(() => {
        this.setState({title: "", body: ""})
      }).then(() => this.props.clearErrors())
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {

    return (
        <form action="" onSubmit={this.handleSubmit}>
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
        <ul>
          {this.props.errors.map((err,idx) => (
          <li key={idx}>{err}</li>))
          }
        </ul>
        </form>
    )
    
  }




}

export default TodoForm;