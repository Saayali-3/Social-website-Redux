import { useState } from "react";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [userId,setUserId] = useState('')

  const onTitleChanged= (e) => setTitle(e.target.value)
  const onConetentCHanged= (e) => setContent(e.target.value)
  const onAuthorChaged= (e) => setUserId(e.target.value)
  
  const onSavePostClicked = () => {
    if(title && content) {
      dispatch(postAdded(title, content,userId))
      setTitle('')
      setContent('')
    }
  }
  const userOptions = users.map((user)=>(
    <option key= {user.id} value={user.id}>
      {user.name}
    </option>
  )
  )

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
         <label htmlFor="postAuthor">Author:</label>
         <select 
         id="postAuthor"
         value={userId}
         onChange={onAuthorChaged}
         >
          <option value='' />
          {userOptions}</select>
         <label htmlFor="postContent">Content:</label>
         <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onConetentCHanged}
          />
          <button
          onClick={onSavePostClicked} 
          type="button"
          disabled={!(title && content && userId)}
          >Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm
