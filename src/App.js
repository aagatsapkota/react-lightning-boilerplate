import React, { Component } from 'react'
import LCC from 'lightning-container'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exampleMessageValue: 'Hello from React!'
    }
  }

  // read in the email without pressing the email
  // convert this into functional component, remove componentDidMount
  // like the website,
  // useEffect its gonna replace componentDID
  // inside useEffect, fire the LCC.addMessageHandler, and the clickbutton
  // how to convert react components to functional component using hooks
  // just fire LCC.sendMessage
  // useState set it in state, that happens inside of messageReceivedHandler
  //
  componentDidMount() {
    LCC.addMessageHandler(this.messageRecievedHandler)
  }

  messageRecievedHandler(msg) {
    const { name, value } = msg

    console.log('Messaged received.')
    console.log(`Message name: ${name}`)
    console.log(`Message value: ${value}`)

    // Add Any Logic that should be handled here.

    switch (name) {
      case 'example':
        console.log('Handle Example Messgage')
        break
      default:
        console.log('Do Nothing')
    }
  }

  sendMessage(msg) {
    // Message format should be an object like { name: "messageName", value: "message value"}
    LCC.sendMessage(msg)
  }

  sendMessageExample() {
    // You can wrap the send message function to easily send specific message types.

    this.sendMessage(
      {
        name: 'example',
        value: this.state.exampleMessageValue
      }
    )
  }

  // in return, button will go away, return { email }
  render() {
    return (
      <div>
        <p>A React Component!</p>
        <button type="submit" onClick={this.sendMessageExample.bind(this)}>Test</button>
      </div>
    )
  }
}

export default App
