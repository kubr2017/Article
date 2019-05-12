import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post'

class AllPost extends Component{
  render(){
    return(
      <div>
        <h3>All Posts</h3>
        <ul>
          <li>{console.log(this.props.posts)}
            {this.props.posts.map(post => (
              <Post key={post.id} post={post}/>
            ))}
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);
