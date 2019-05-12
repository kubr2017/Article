import React, {Component} from 'react';

class PostForm extends Component {
  render(){
    return(
      <div>
        <h3>Create article</h3>
        <form>
          <input required type='text' placeholder='Input title'/><br/><br/>
          <textarea required rows='4' placeholder='Message'/><br/><br/>
          <button>Publish</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
