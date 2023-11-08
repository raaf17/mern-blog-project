import React from 'react'
import { Button, Input, Upload } from '../../components'

const CreateBlog = () => {
  return (
    <div>
      <p>Create New Blog Post</p>
      <Input label="Post Title"/>
      <Upload/>
      <textarea></textarea>
      <Button title="Save"/>
    </div>
  )
}

export default CreateBlog