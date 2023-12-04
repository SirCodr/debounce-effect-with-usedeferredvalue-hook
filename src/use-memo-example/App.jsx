import { useState } from 'react'
import LargeList from './components/LargeList'

function App() {
  const [text, setText] = useState('')

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <LargeList text={text} />
    </>
  )
}

export default App
