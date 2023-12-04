import { useDeferredValue, useState } from 'react'
import LargeList from './components/LargeList'

function App() {
  const [text, setText] = useState('')
  const deferredText = useDeferredValue(text)

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <LargeList text={deferredText} />
    </>
  )
}

export default App
