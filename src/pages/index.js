import React from 'react'
import Layout from '../components/layout'
import Image from '../components/mainImage'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`dereck`, `fatima`, `quock`, `wedding`, `fatquock`]}
      />
      <div style={{ filter: 'blur(8px)' }}>
        <Image style={{ height: '100vh' }} />
      </div>
      <div
        style={{
          width: '100%',
          padding: '0 25%',
          position: 'absolute',
          top: '20vw',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h1
          style={{
            width: '100%',
            fontSize: '5vw',
            fontWeight: 300,
            textShadow: '0 0 8px',
            fontFamily:
              '"HelveticaNeue-UltraLight", "Helvetica Neue Ultra Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
          }}
        >
          MY BIG FAT QUOCK WEDDING COMING SOON
        </h1>
        <h2
          style={{
            fontSize: '3vw',
            fontWeight: 300,
            letterSpacing: 10,
            textShadow: '0 0 8px',
          }}
        >
          11/02/19
        </h2>
      </div>
    </Layout>
  )
}

export default IndexPage
