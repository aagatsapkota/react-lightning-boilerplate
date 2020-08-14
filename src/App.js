import React, { useState, useEffect } from 'react'
import LCC from 'lightning-container'

import './App.css'

const App = (props) => {

  const exampleMessageValue = useState(props)

  const messageRecievedHandler = (msg) => {
    const { name, value } = msg

    console.log(`Message name: ${name}`)
    console.log(`Message value: ${value}`)
  }

  useEffect(() => {
    LCC.addMessageHandler(messageRecievedHandler)
  })

  const sendMessage = (msg) => {
    // Message format should be an object like { name: "messageName", value: "message value"}
    LCC.sendMessage(msg)
  }

  const sendMessageExample = () => {
    // You can wrap the send message function to easily send specific message types.

    sendMessage(
      {
        name: 'example',
        value: exampleMessageValue
      }
    )
  }

  // in return, button will go away, return { email }
  return (
    <div>
      <p>A React Component!</p>
      <button type="submit" onClick={sendMessageExample.bind()}>Test</button>
    </div>
  )
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

export default App
