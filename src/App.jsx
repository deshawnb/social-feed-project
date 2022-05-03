import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPosts/DisplayPost';

function App() {

  const [posts, setPosts] = useState([{name: 'Billy Bob', comment: 'This is a test, would you not agree?'},{name: 'Sally May', comment: 'I am inevitable'}])

  function addNewPost(post){

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
  }

  return (
    <div >
        <h3>Social Feed</h3>
        <div>
          <CreatePost addNewPostProperty={addNewPost}/>
          <DisplayPost parentPosts={posts}/>
        </div>
    </div>
  );
}

export default App;
