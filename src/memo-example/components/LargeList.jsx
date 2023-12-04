import { memo } from 'react'

const LargeList = memo(function LargeList ({ text }) {
  const LOOP_SIZE = 20000
  const items = []

  for(let i = 0;i <= LOOP_SIZE; i++) {
    items.push((
      <p key={i}>{text}</p>
    ))
  }

  return items
})

export default LargeList