const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const message = {
        id: 4,
        message: state.textMessage
      }
      state.messages.push(message)
      state.textMessage = ''
      return state
    case UPDATE_MESSAGE_TEXT:
      state.textMessage = action.newText
      return state
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

export default dialogsReducer