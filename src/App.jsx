import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPosts/DisplayPost';
import NavBar from './Components/NavBar/NavBar';
import './App.css'

function App() {

  const [posts, setPosts] = useState([{name: 'Billy Bob', comment: 'This is a test, would you not agree?'},{name: 'Sally May', comment: 'I am inevitable'}])

  function addNewPost(post){

    let tempPosts = [...posts,post ];

    setPosts(tempPosts);
  }

  return (
    
  <body>
    <header>
      <NavBar/>
    </header>
    <main>
      <div>
        <CreatePost addNewPostProperty={addNewPost}/>
      </div>
      <div>
        <DisplayPost parentPosts={posts}/>  
      </div>
    </main>
  </body>
  );
}

export default App;
