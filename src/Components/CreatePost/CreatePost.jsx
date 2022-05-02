import React, { useState } from "react";


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [userPost, setUserPost] = useState('');

    function handleSubmit(event) {
        event.preventDefalt();
        let newPost = {
            name : name,
            userPost : userPost
        };
        console.log(newPost);
        props.addNewPost(newPost)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className="Form-group">
                <label>Name</label>
                <input type='text' className="form-control" value={name} onChange{(event) => setName(parseFloat(event.target.value))}/>
                
            </div>

        </form>
    )
}