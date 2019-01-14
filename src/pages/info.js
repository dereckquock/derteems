import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Things to do" />
    <div style={{ height: '100vh', background: '#225648' }}>
      <h1>Things to do in SLO</h1>
      <h1>Accommodations</h1>
    </div>
  </Layout>
)

export default SecondPage
