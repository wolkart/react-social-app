import React from 'react'
import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/Forms/FormsControls";

const maxLength10 = maxLength(10)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name='newPost'
        placeholder='Add new post'
        validate={[required, maxLength10]}
      />
      <button>Add post</button>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: 'newPostForm'})(AddPostForm)

export const MyPosts = React.memo(props => {
  const onAddPost = (values) => {
    props.addNewPost(values.newPost)
  }

  return (
    <div className="MyPosts">
      <div className="MyPosts__header">My posts</div>
      <div className='AddPost'>
        <AddPostFormRedux onSubmit={onAddPost}/>
      </div>
      <PostsList posts={props.posts}/>
    </div>
  )
})