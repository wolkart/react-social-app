const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'

let store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      textPost: 'Default text',
      posts: [
        {id: 1, message: 'Hi, how are you?', like: 10},
        {id: 2, message: 'My name is Artem!', like: 87}
      ]
    }
  },
  _callSubscriber() {
    console.log('Yes')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const post = {
        id: 3,
        message: this._state.profilePage.textPost,
        like: 0
      }

      this._state.profilePage.posts.push(post)
      this._state.profilePage.textPost = ''
      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.textPost = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === ADD_MESSAGE) {
      const message = {
        id: 4,
        message: this._state.dialogsPage.textMessage
      }
      this._state.dialogsPage.messages.push(message)
      this._state.dialogsPage.textMessage = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.dialogsPage.textMessage = action.newText
      this._callSubscriber(this._state)
    }
  }
}

export const updateTextPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export const updateTextMessageActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    newText: text
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default store