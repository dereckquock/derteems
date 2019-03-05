import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/mainImage'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="contents">
      <h1>🤷‍♀️ page not found 🤷‍♂️</h1>
      <Image />
    </div>
  </Layout>
)

export default NotFoundPage
