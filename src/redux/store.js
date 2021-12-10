// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";
//
// let store = {
//   _state: {
//     dialogsPage: {
//       dialogs: [
//         {
//           id: 1,
//           name: 'Artem',
//           photo: 'https://i.pinimg.com/236x/fc/88/34/fc88340caa7ef1b57877246ffc78646d--wolves-chocolate.jpg?nii=t'
//         },
//         {
//           id: 2,
//           name: 'Olga',
//           photo: 'https://i.pinimg.com/originals/8b/0c/85/8b0c85f1290a4aafc10e4633c5740269.jpg'
//         },
//         {
//           id: 3,
//           name: 'Fiona',
//           photo: 'https://99px.ru/sstorage/56/2019/11/image_561311190659479643839.jpg'
//         }
//       ],
//       textMessage: 'Default message text',
//       messages: [
//         {id: 1, message: 'Hi'},
//         {id: 2, message: 'What is your name?'},
//         {id: 3, message: 'Yo'}
//       ]
//     },
//     profilePage: {
//       textPost: 'Default text',
//       posts: [
//         {id: 1, message: 'Hi, how are you?', like: 10},
//         {id: 2, message: 'My name is Artem!', like: 87}
//       ]
//     }
//   },
//   _callSubscriber() {
//     console.log('Yes')
//   },
//   getState() {
//     return this._state
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     this._callSubscriber(this._state)
//   }
// }
//
// export default store