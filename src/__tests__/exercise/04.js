// form testing
// http://localhost:3000/login
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  // 💰 you'll need the `getByLabelText` and `getByText` utilities from `render`
  // 💰 getByLabelText can accept a string, regex, or even a function!
  // 📜 https://testing-library.com/docs/dom-testing-library/api-queries#textmatch
  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use fireEvent.change to fire a change event on the username and
  // password fields.
  // 💰 fireEvent.change(someInput, {target: {value: 'new value'}})
  //
  // 🐨 fire a click event on the button with the text "Submit"
  //
  // assert that submitData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

// 💯 Jest has built-in "mock" function APIs. Rather than creating the
// "submittedData" variable, try to use a mock function and assert it was called
// correctly:
// `jest.fn()`: 📜 https://jestjs.io/docs/en/mock-function-api
// `toHaveBeenCalledWith`: 📜 https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-

/* eslint no-unused-vars:0 */