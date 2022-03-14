import React from 'react'

const CIRCLE_COUNT = 15
const CIRCLE_DURATION = 2
const CIRCLE_SIZE = 10

const Heart = () => {
  return (
    <svg viewBox="0 0 1440 1017">
      {Array.from({ length: CIRCLE_COUNT }, (_, idx) => (
        <circle r={CIRCLE_SIZE} fill="red" key={idx} cx={-CIRCLE_SIZE} cy={-CIRCLE_SIZE}>
          <animateMotion
            begin={`${CIRCLE_DURATION / CIRCLE_COUNT * idx}s`}
            dur={`${CIRCLE_DURATION}s`}
            repeatCount="indefinite"
            path="M620,620 C250,415 550,180 620,345 C690,180 990,415 620,620 Z"
          />
        </circle>
      ))}
    </svg>
  )
}

export default Heart
