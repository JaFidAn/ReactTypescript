import React from 'react'

import Counter from './counter'
import { counterOptions } from './models/counter'

export default function Counters() {
  return (
    <div>
      {counterOptions.map((counter) => (
        <Counter key={counter.id} />
      ))}
    </div>
  )
}
