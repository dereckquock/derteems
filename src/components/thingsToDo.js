import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const thingsToDo = [
  {
    title: 'Cal Poly',
    url: 'https://viewbook.calpoly.edu/visit/',
  },
  {
    title: 'Downtown SLO',
    url: 'https://downtownslo.com/visit/',
  },
  {
    title: 'Downtown Farmers Market',
    url: 'https://downtownslo.com/farmers-market/',
  },
  {
    title: 'Hiking',
    url:
      'https://sanluisobispovacations.com/things-to-do/outdoor-recreation/hiking/',
  },
  {
    title: 'Pismo Beach',
    url: 'http://www.classiccalifornia.com/things-to-do-in-pismo-beach/',
  },
  {
    title: 'ATVing',
    url: 'https://www.yelp.com/search?cflt=atvrentals&find_loc=Oceano%2C+CA',
  },
]

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "calpoly.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "downtown.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "farmers.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "bishop.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "pismo.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image6: file(relativePath: { eq: "dunes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 300px)',
        gridGap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        '@media(max-width: 768px)': {
          gridTemplateColumns: '300px 300px',
        },
        '@media(max-width: 414px)': { gridTemplateColumns: '1fr' },
      }}
    >
      {Object.values(data).map(({ childImageSharp: { fluid } }, index) => {
        let rotation = 'rotateZ(0deg)'

        switch (index) {
          case 0:
            rotation = 'rotateZ(-10deg)'
            break
          case 2:
            rotation = 'rotateZ(10deg)'
            break
          case 4:
            rotation = 'rotateZ(-10deg)'
            break
          default:
        }

        return (
          <div
            key={thingsToDo[index].title}
            css={{
              position: 'relative',
              transform: rotation,
            }}
          >
            <div
              style={{
                width: '100%',
                position: 'absolute',
                top: 16,
              }}
            >
              <a
                href={thingsToDo[index].url}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {thingsToDo[index].title}
              </a>
            </div>
            <a
              href={thingsToDo[index].url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                overflow: 'hidden',
                border: '20px solid #fff',
                borderTopWidth: 80,
                background: '#fff',
                borderRadius: 4,
                boxShadow: '2px 4px 16px 2px #000',
              }}
            >
              <Parallax
                key={fluid.src}
                y={[20, -20]}
                styleOuter={{ height: 200 }}
                styleInner={{ width: '100%', height: '100%' }}
              >
                <Img fluid={fluid} style={{ width: '100%', height: '100%' }} />
              </Parallax>
            </a>
          </div>
        )
      })}
    </div>
  )
}
