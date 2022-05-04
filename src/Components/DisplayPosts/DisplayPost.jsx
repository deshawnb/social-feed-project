import Post from "../Post/Post";
import './DisplayPost.css'

const DisplayPost = (props) => {
    return (
        <div className="display">
          {props.parentPosts.map((post) => {
            return (
              <div>
                <Post name={post.name} comment={post.comment}/>
              </div>
            );
          })}
        </div>
    );
}

export default DisplayPost;