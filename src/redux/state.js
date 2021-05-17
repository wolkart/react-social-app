const state = {
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
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'What is your name?'},
      {id: 3, message: 'Yo'}
    ]
  },
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', like: 10},
      {id: 2, message: 'My name is Artem!', like: 87}
    ]
  }
}

export const addPost = (postMessage) => {
  const post = {
    id: 5,
    message: postMessage,
    like: 0
  }

  state.profilePage.posts.push(post)
}

export default state