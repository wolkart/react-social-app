import { ActionsType } from "./store";

const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const SEND_MESSAGE = 'ADD-SEND_MESSAGE'

export type DialogType = {
  id: number
  name: string
  photo: string
}

export type MessageType = {
  id: number
  message: string
}

type InitialStateType = {
  dialogs: Array<DialogType> // Синтаксис 1
  messages: MessageType[]  // Синтаксис 2
}

const initialState: InitialStateType = {
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
    },
    {
      id: 4,
      name: 'Fiona',
      photo: 'https://99px.ru/sstorage/56/2019/11/image_561311190659479643839.jpg'
    },
    {
      id: 5,
      name: 'Fiona',
      photo: 'https://99px.ru/sstorage/56/2019/11/image_561311190659479643839.jpg'
    },
    {
      id: 6,
      name: 'Fiona',
      photo: 'https://99px.ru/sstorage/56/2019/11/image_561311190659479643839.jpg'
    },
    {
      id: 7,
      name: 'Fiona',
      photo: 'https://99px.ru/sstorage/56/2019/11/image_561311190659479643839.jpg'
    },
    {
      id: 8,
      name: 'Fiona',
      photo: 'https://99px.ru/sstorage/56/2019/11/image_561311190659479643839.jpg'
    },
    {
      id: 9,
      name: 'Fiona',
      photo: 'https://99px.ru/sstorage/56/2019/11/image_561311190659479643839.jpg'
    },
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'What is your name?'},
    {id: 3, message: 'Yo'}
  ]
}

const chatReducer = (state = initialState, action: DialogsActionType): InitialStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE': {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,
            message: action.payload
          }
        ]
      }
    }
    default:
      return state
  }
}

type DialogsActionType = ActionsType<typeof actions>

export const actions = {
  sendMessage: (payload: string) => ({type: 'SEND_MESSAGE', payload} as const)
}

export default chatReducer