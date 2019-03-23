import React, { useState } from 'react'
import { css } from 'glamor'
import ReactPlayer from 'react-player/lib/players/Vimeo'
import SEO from '../components/seo'
import { animateInUp } from '../utils/animations'

export default () => {
  const [done, setDone] = useState(false)

  return (
    <>
      <SEO title="🥂 dereck & fatima" />

      <div style={{ height: '100vh', paddingBottom: 95, position: 'relative' }}>
        <ReactPlayer
          url="https://vimeo.com/320916775/5b9da95da4"
          width="100%"
          height="100%"
          volume={0.35}
          playing={!done}
          config={{ vimeo: { preload: true } }}
          onEnded={() => setDone(true)}
        />

        {done && (
          <div
            className={css({
              width: '100%',
              height: '100%',
              padding: 124,
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 30,
              background: '#000',
              color: '#fff',

              '@media(max-width: 640px)': {
                padding: 10,
              },
            })}
          >
            <div>
              <div className={css(animateInUp(1 / 4))}>
                Video by{' '}
                <a
                  href="https://www.marknicolasfilms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c9baaa' }}
                >
                  Mark Nicolas Films
                </a>
              </div>
              <div
                className={css(
                  {
                    marginTop: 8,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 40px)',
                    gridGap: 20,
                    justifyContent: 'center',
                  },
                  animateInUp(2 / 4)
                )}
              >
                <a
                  href="https://vimeo.com/user68584040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css({
                    transition: 'all 0.5s ease',

                    ':hover': {
                      transform: 'scale(1.1)',
                    },
                  })}
                >
                  <svg width="40px" height="40px" viewBox="0 0 256 223">
                    <path
                      d="M255.876213,51.662485 C254.737006,76.6303263 237.331453,110.819347 203.667236,154.211627 C168.861251,199.53928 139.413381,222.200547 115.323625,222.200547 C100.406409,222.200547 87.772727,208.402057 77.4609804,180.794839 C70.5694159,155.489076 63.6855314,130.185872 56.7965269,104.880109 C49.1343974,77.2882505 40.9193043,63.4744013 32.1358876,63.4744013 C30.2209952,63.4744013 23.5188719,67.5115474 12.0448778,75.5551193 L0,60.0081389 C12.6336816,48.884867 25.0984021,37.7641552 37.3608813,26.6280832 C54.2109102,12.038549 66.8599519,4.36617944 75.2900864,3.59049443 C95.2146951,1.67304204 107.477174,15.3179302 112.080084,44.5277189 C117.054196,76.0415225 120.494858,95.6435691 122.430231,103.315939 C128.172348,129.461388 134.490469,142.517472 141.394833,142.517472 C146.752948,142.517472 154.80164,134.038697 165.533229,117.081148 C176.254579,100.118478 181.996696,87.2134346 182.772381,78.3480974 C184.298151,63.7099228 178.553473,56.3729154 165.533229,56.3729154 C159.40455,56.3729154 153.086429,57.7860445 146.586547,60.5790226 C159.166468,19.2885158 183.205023,-0.764093703 218.686853,0.380233689 C244.991023,1.15335868 257.391743,18.2465891 255.876213,51.662485"
                      fill="#32B8E8"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/marknicolasfilms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css({
                    transition: 'all 0.5s ease',

                    ':hover': {
                      transform: 'scale(1.1)',
                    },
                  })}
                >
                  <svg
                    x="0px"
                    y="0px"
                    width="40px"
                    height="40px"
                    viewBox="0 0 551.034 551.034"
                  >
                    <g>
                      <linearGradient
                        id="ig1"
                        gradientUnits="userSpaceOnUse"
                        x1="275.517"
                        y1="4.57"
                        x2="275.517"
                        y2="549.72"
                        gradientTransform="matrix(1 0 0 -1 0 554)"
                      >
                        <stop offset="0" style={{ stopColor: '#E09B3D' }} />
                        <stop offset="0.3" style={{ stopColor: '#C74C4D' }} />
                        <stop offset="0.6" style={{ stopColor: '#C21975' }} />
                        <stop offset="1" style={{ stopColor: '#7024C4' }} />
                      </linearGradient>
                      <path
                        style={{ fill: 'url(#ig1)' }}
                        d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
                		c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
                		C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
                		c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
                		c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
                      />

                      <linearGradient
                        id="ig2"
                        gradientUnits="userSpaceOnUse"
                        x1="275.517"
                        y1="4.57"
                        x2="275.517"
                        y2="549.72"
                        gradientTransform="matrix(1 0 0 -1 0 554)"
                      >
                        <stop offset="0" style={{ stopColor: '#E09B3D' }} />
                        <stop offset="0.3" style={{ stopColor: '#C74C4D' }} />
                        <stop offset="0.6" style={{ stopColor: '#C21975' }} />
                        <stop offset="1" style={{ stopColor: '#7024C4' }} />
                      </linearGradient>
                      <path
                        style={{ fill: 'url(#ig2)' }}
                        d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517
                		S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083
                		s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z"
                      />

                      <linearGradient
                        id="SVGID_3_"
                        gradientUnits="userSpaceOnUse"
                        x1="418.31"
                        y1="4.57"
                        x2="418.31"
                        y2="549.72"
                        gradientTransform="matrix(1 0 0 -1 0 554)"
                      >
                        <stop offset="0" style={{ stopColor: '#E09B3D' }} />
                        <stop offset="0.3" style={{ stopColor: '#C74C4D' }} />
                        <stop offset="0.6" style={{ stopColor: '#C21975' }} />
                        <stop offset="1" style={{ stopColor: '#7024C4' }} />
                      </linearGradient>
                      <circle
                        style={{ fill: 'url(#SVGID_3_)' }}
                        cx="418.31"
                        cy="134.07"
                        r="34.15"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/MarkNicolasFilms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css({
                    transition: 'all 0.5s ease',

                    ':hover': {
                      transform: 'scale(1.1)',
                    },
                  })}
                >
                  <svg
                    x="0px"
                    y="0px"
                    width="40px"
                    height="40px"
                    viewBox="0 0 266.893 266.895"
                  >
                    <path
                      fill="#3C5A99"
                      d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812
                  	c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225
                  	H248.082z"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935
                  	l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585
                  	v99.803H182.409z"
                    />
                  </svg>
                </a>
              </div>
              <div className={css({ marginTop: 20 }, animateInUp(3 / 4))}>
                Though one may be overpowered, two can defend themselves. A cord
                of three strands is not quickly broken.
              </div>
              <div className={css({ fontSize: 22 }, animateInUp(4 / 4))}>
                ‭‭ecclesiastes 4:12
              </div>
              <button
                className={`btn ${css({ margin: 20 }, animateInUp(5 / 4))}`}
                onClick={() => setDone(false)}
              >
                Replay
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
