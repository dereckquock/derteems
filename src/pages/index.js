import React from 'react'
import ReactPlayer from 'react-player'
import SEO from '../components/seo'

export default () => {
  return (
    <>
      <SEO title="🥂 fatima & dereck" />
      <div style={{ height: '100vh', paddingBottom: 95, position: 'relative' }}>
        <ReactPlayer
          url="https://vimeo.com/320916775/5b9da95da4"
          width="100%"
          height="100%"
          volume={0.35}
          playing
          loop={true}
          config={{ vimeo: { preload: true } }}
        />
      </div>
    </>
  )
}
