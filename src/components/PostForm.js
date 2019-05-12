import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id:1,
      title,
      message
    }
    console.log(data);

    this.props.dispatch({
      type: "ADD_POST",
      data
    });

    this.getTitle.value = '';
    this.getMessage.value = '';
  }

  render(){
    return(
      <div>
        <h3>Create article</h3>
        <form onSubmit={this.handleSubmit}>
          <input ref={input => this.getTitle = input} required type='text' placeholder='Input title'/><br/><br/>
          <textarea ref={input => this.getMessage = input} required rows='4' placeholder='Message'/><br/><br/>
          <button>Publish</button>
        </form>
      </div>
    )
  }
}

export default connect()(PostForm);
