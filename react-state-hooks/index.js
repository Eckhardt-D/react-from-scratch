import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'

function TheInput() {
  // Syntactic jizz
  const [text, setText] = useState('Change My state.')

  useEffect(
    () => { 
      document.getElementById('effect').textContent = text

      // Requires a clean-up function
      return () => {null}
    }
  )

  return (
    <div>
      <h1>{text}</h1>
      <input
       type="text"
       id="textInput" />
      <button onClick={() => setText(document.getElementById('textInput').value)}>Change</button>
      <br/>
      <p>This is changed by useEffect: <span id="effect"></span></p>
    </div>
  )
}

ReactDom.render(
  <TheInput/>,
  document.getElementById('root')
)