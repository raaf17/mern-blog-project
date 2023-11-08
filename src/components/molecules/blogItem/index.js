import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogItem.scss'

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt='RegisterBg'/>
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum eaque, eligendi unde fugiat assumenda in doloremque minima natus nostrum molestias quis quia quibusdam saepe enim aliquid sunt provident nihil?</p>
        <p></p>
      </div>
    </div>
  )
}

export default BlogItem