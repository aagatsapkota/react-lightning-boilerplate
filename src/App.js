import React, { useState, useEffect } from 'react'
import LCC from 'lightning-container'
import './App.css'

const App = () => {
  const [email, setEmail] = useState()
  const messageRecievedHandler = (msg) => {
    const { name, value } = msg
    console.log(`Message name: ${name}`)
    console.log(`Message value: ${value}`)
    setEmail(value)
  }
  useEffect(() => {
    LCC.addMessageHandler(messageRecievedHandler)
    LCC.sendMessage({
      name: 'example',
      value: 'exampleMessageValue'
    })
  }, [])

  return (
    <div>
      <p>{ email }</p>
    </div>
  )
}
export default App
