const state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Olga'},
            {id: 3, name: 'Fiona'}
        ],
        messages : [
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

export default state