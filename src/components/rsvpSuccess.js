import React, { useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function drawSnowflake(ctx) {
  const numPoints = Math.floor(5 + Math.random() * 2)
  const innerRadius = 8
  const outerRadius = 2

  ctx.beginPath()
  ctx.moveTo(0, 0 - outerRadius)

  for (let n = 1; n < numPoints * 2; n++) {
    const radius = n % 2 === 0 ? outerRadius : innerRadius
    const x = radius * Math.sin((n * Math.PI) / numPoints)
    const y = -1 * radius * Math.cos((n * Math.PI) / numPoints)
    ctx.lineTo(x, y)
  }
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export default ({ isPartyAttending }) => {
  const [showConfetti, setShowConfetti] = useState(true)
  const { width, height } = useWindowSize()
  const isDecember = new Date().getMonth() === 11

  return (
    <div css={{ padding: 10, fontSize: '2.25rem' }}>
      {isPartyAttending ? (
        <>
          {showConfetti && (
            <Confetti
              width={width}
              height={height}
              gravity={0.03}
              recycle={false}
              colors={isDecember ? ['#AEE1FF', '#fff'] : undefined}
              drawShape={isDecember ? drawSnowflake : undefined}
              onConfettiComplete={() => setShowConfetti(false)}
            />
          )}
          <div>Thanks! We're excited to see you!!</div>
          <div>🤗🍻🥂🎉</div>
        </>
      ) : (
        <div>😔 We'll miss you!</div>
      )}
    </div>
  )
}
