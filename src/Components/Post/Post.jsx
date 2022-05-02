
const Post = (props) => {
    return (
        <div>
          {props.parentPosts.map((post) => {
            return (
              <div>
                <p>{post.name}</p>
                <p>{post.comment}</p>
                <button>Like</button>
                <button>Dislike</button>
              </div>
            );
          })}
        </div>
    );
}

export default Post;