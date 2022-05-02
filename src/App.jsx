import React, { useState } from 'react';
import Post from './Components/Post/Post';


function App() {

  const [posts, setPosts] = useState([{name: 'Billy Bob', comment: 'This is a test, would you not agree?'},{name: 'Sally May', comment: 'I am inevitable'}])

  return (
    <div >
        <h3>Social Feed</h3>
        <div>
          <Post parentPosts={posts}/>
        </div>
    </div>
  );
}

export default App;
