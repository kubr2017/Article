import React, {Component} from 'react';

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

export default PostForm;
