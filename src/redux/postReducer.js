const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const initialState = {
  textPost: 'Default text',
  posts: [
    {id: 1, message: 'Hi, how are you?', like: 10},
    {id: 2, message: 'My name is Artem!', like: 87}
  ]
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const post = {
        id: 3,
        message: state.textPost,
        like: 0
      }

      state.posts.push(post)
      state.textPost = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.textPost = action.newText
      return state
    default:
      return state
  }
}

export const updateTextPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export default postReducer