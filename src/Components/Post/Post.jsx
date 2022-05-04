import React, { useState } from "react";
import "./Post.css"

const Post = (props) => {

  const [like, setLike] = useState("base");
  const [dislike, setDislike] = useState("base");

  function liked(){
    console.log('you just cliked');
    if(like === "like"){
      setLike("base");
    }
    else{
      setLike("like");
      setDislike("base");
    }
  }

  function disliked(){
    console.log('you just cliked');
    if(dislike === "dislike"){
      setDislike("base");
    }
    else{
      setDislike("dislike");
      setLike("base");
    }
  }

  return (
    <div className="post">
      <p>{props.name}</p>
      <p style={{overflow: 'scroll', height: '50px'}}>{props.comment}</p>
      <div className="button">
        <button className={like} onClick={liked}>Like</button>
        <button className={dislike} onClick={disliked}>Dislike</button>
      </div>
    </div>
  );
}

export default Post;