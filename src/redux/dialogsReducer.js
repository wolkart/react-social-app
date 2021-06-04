const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Artem',
      photo: 'https://i.pinimg.com/236x/fc/88/34/fc88340caa7ef1b57877246ffc78646d--wolves-chocolate.jpg?nii=t'
    },
    {
      id: 2,
      name: 'Olga',
      photo: 'https://i.pinimg.com/originals/8b/0c/85/8b0c85f1290a4aafc10e4633c5740269.jpg'
    },
    {
      id: 3,
      name: 'Fiona',
      photo: 'https://99px.ru/sstorage/56/2019/11/image_561311190659479643839.jpg'
    }
  ],
  textMessage: 'Default message text',
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'What is your name?'},
    {id: 3, message: 'Yo'}
  ]
}

const dialogsReducer = (state = initialState, action) => {
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