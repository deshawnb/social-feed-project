
const Post = (props) => {
    return (
      <div>
        <p>{props.name}</p>
        <p>{props.comment}</p>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    );
}

export default Post;