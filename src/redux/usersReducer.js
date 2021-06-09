const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const updateTextMessageActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    newText: text
  }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default usersReducer