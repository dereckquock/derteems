import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default props => {
  const data = useStaticQuery(graphql`
    query {
      mainImage: file(relativePath: { eq: "61.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3264) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.mainImage.childImageSharp.fluid} {...props} />
}
