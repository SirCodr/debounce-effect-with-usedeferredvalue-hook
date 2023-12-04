import { useDeferredValue, useMemo } from 'react'

const LargeList = ({ text }) => {
  const LOOP_SIZE = 20000
  const deferredText = useDeferredValue(text)
  const items = useMemo(() => {
    const items = []

    for (let i = 0; i <= LOOP_SIZE; i++) {
      items.push(<p key={i}>{text}</p>)
    }

    return items
  }, [deferredText])

  return items
}

export default LargeList
