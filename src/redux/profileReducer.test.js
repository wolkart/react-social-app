import React from "react";
import profileReducer, {addNewPost} from "./profileReducer";

let state = {
  posts: [
    {id: 1, message: 'Hi, how are you?', like: 10},
    {id: 2, message: 'My name is Artem!', like: 87}
  ],
  profile: null,
  status: ''
}

it('length of posts should be incremented', () => {
  //1. Test data
  let action = addNewPost('test text')

  //2. Action
  let newState = profileReducer(state, action)

  //3. Expectation
  expect(newState.posts.length).toBe(3)
});

it('message of new posts should be correct', () => {
  //1. Test data
  let action = addNewPost('test text')

  //2. Action
  let newState = profileReducer(state, action)

  //3. Expectation
  expect(newState.posts[2].message).toBe('test text')
});