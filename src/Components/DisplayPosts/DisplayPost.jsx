import Post from "../Post/Post";

const DisplayPost = (props) => {
    return (
        <div>
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