import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Animated from './Animated'

import tune1Pic from '../images/tune1.webp'
import glidePic from '../images/glide.webp'
import elasticPic from '../images/elastic.webp'
import tune2Pic from '../images/tune2.webp'
import earlyPic from '../images/early.webp'
import circlePic from '../images/circle.webp'
import bellsPic from '../images/bells.webp'

import bells1 from '../tutorial_audio/bells1.mp3'
import bells2 from '../tutorial_audio/bells2.mp3'
import bells3 from '../tutorial_audio/bells3.mp3'
import circle1 from '../tutorial_audio/circle1_1.mp3'
import circle2 from '../tutorial_audio/circle2.mp3'
import circle3 from '../tutorial_audio/circle3.mp3'
import early1 from '../tutorial_audio/early1.mp3'
import early2 from '../tutorial_audio/early2.mp3'
import early3 from '../tutorial_audio/early3.mp3'
import elastic1 from '../tutorial_audio/elastic1.mp3'
import elastic2 from '../tutorial_audio/elastic2.mp3'
import elastic3 from '../tutorial_audio/elastic3.mp3'
import glide1 from '../tutorial_audio/glide1.mp3'
import glide2 from '../tutorial_audio/glide2.mp3'
import glide3 from '../tutorial_audio/glide3.mp3'
import shadow1 from '../tutorial_audio/shadow1.mp3'
import shadow2 from '../tutorial_audio/shadow2.mp3'
import shadow3 from '../tutorial_audio/shadow3.mp3'
import tune11 from '../tutorial_audio/tune11.mp3'
import tune12 from '../tutorial_audio/tune12.mp3'
import tune13 from '../tutorial_audio/tune13.mp3'
import tune21 from '../tutorial_audio/tune21.mp3'
import tune22 from '../tutorial_audio/tune22.mp3'
import tune23 from '../tutorial_audio/tune23.mp3'



export default function Tutorial() {

  const tutorialPage = [
    {
      format: 1,
      id: 'tutorial',
      header: 'O Holy Night Chorus',
      blurb: 'Click to practice each section, then put the sections together.',
      options: ['Fall on Your Knees...', 'O Night Divine...', 'Both Sections Together'],
      links: ['knees', 'night', 'both']
    },
    {
      format: 1,
      id: 'knees',
      header: 'Fall On Your Knees',
      blurb: 'Give each part a memorable name. Use that name to remember what to sing.',
      options: ['Tune', 'Shadow', 'Glide', 'Elastic'],
      links: ['tune1', 'shadow', 'glide', 'elastic']
    },
    {
      format: 1,
      id: 'night',
      header: 'O Night Divine',
      blurb: 'Give each part a memorable name. Use that name to remember what to sing.',
      options: ['Tune', 'Early Slinky', 'Circle then Slinky', 'Bells'],
      links: ['tune2', 'early', 'circle', 'bells']
    },
    {
      format: 1,
      id: 'both',
      header: 'Both Sections Together',
      blurb: 'Once you have practised each section, bring them together.',
      options: ['Soprano', 'Alto', 'Tenor', 'Bass'],
      links: ['soprano', 'alto', 'tenor', 'bass']
    },
    {
      format: 2,
      id: 'tune1',
      header: 'Tune',
      blurb: 'We already know the tune.',
      image: tune1Pic,
      choruses: ['Soprano', 'Soprano', 'Tenor'],
      audio: [tune11, tune12, tune13],
      memoryTip: ''
    },
    {
      format: 2,
      id: 'shadow',
      header: 'Shadow',
      blurb: "'Shadows' the Tune",
      image: tune1Pic,
      choruses: ['Alto', 'Bass', 'Bass'],
      audio: [shadow1, shadow2, shadow3],
      memoryTip: 'Memory tip: Shadow starts one note higher than the note you just sang.'
    },
    {
      format: 2,
      id: 'glide',
      header: 'Glide',
      blurb: "Has long notes that 'glide",
      image: glidePic,
      choruses: ['Tenor', 'Alto', 'Soprano'],
      audio: [glide1, glide2, glide3],
      memoryTip: 'Memory tip: Glide starts one note lower than the note you just sang.'
    },
    {
      format: 2,
      id: 'elastic',
      header: 'Elastic',
      blurb: 'Pulls away but always returns',
      image: elasticPic,
      choruses: ['Bass', 'Tenor', 'Alto'],
      audio: [elastic1, elastic2, elastic3],
      memoryTip: 'Memory tip: Elastic starts on the same note as the one you just sang.'
    },
    {
      format: 2,
      id: 'tune2',
      header: 'Tune',
      blurb: 'We already know the tune',
      image: tune2Pic,
      choruses: ['Soprano', 'Soprano', 'Soprano'],
      audio: [tune21, tune22, tune23],
      memoryTip: ''
    },
    {
      format: 2,
      id: 'early',
      header: 'Early Slinky',
      blurb: "Creates up the -'vine' early on",
      image: earlyPic,
      choruses: ['Alto', 'Alto', 'Tenor'],
      audio: [early1, early2, early3],
      memoryTip: "Memory tip: Tenors, beware the 'double slinky' - in chorus 3, the slinky comes twice."
    },
    {
      format: 2,
      id: 'circle',
      header: 'Circle then Slinky',
      blurb: "Circles around the first '-vine' and creeps up the second",
      image: circlePic,
      choruses: ['Tenor', 'Tenor', 'Bass'],
      audio: [circle1, circle2, circle3],
      memoryTip: "Circles around the first '-vine' and creeps up the second."
    },
    {
      format: 2,
      id: 'bells',
      header: 'Bells',
      blurb: 'Sound like bells (ding dong)',
      image: bellsPic,
      choruses: ['Bass', 'Bass', 'Alto'],
      audio: [bells1, bells2, bells3],
      memoryTip: 'Memory tip: Altos, at the end of chorus 3, go back to shadowing the tune.'
    },
    {
      format: 3,
      id: 'soprano',
      header: 'Soprano',
      chorus1Text: ['Tune', 'Tune'],
      chorus2Text: ['Tune', 'Tune'],
      chorus3Text: ['Glide', 'Tune'],
      audio1: [tune11, tune21],
      audio2: [tune12, tune22],
      audio3: [glide3, tune23]
    },
    {
      format: 3,
      id: 'alto',
      header: 'Alto',
      chorus1Text: ['Shadow', 'Early Slinky'],
      chorus2Text: ['Glide', 'Early Slinky'],
      chorus3Text: ['Elastic', 'Bells'],
      audio1: [shadow1, early1],
      audio2: [glide2, early2],
      audio3: [elastic3, bells2]
    },
    {
      format: 3,
      id: 'tenor',
      header: 'Tenor',
      chorus1Text: ['Glide', 'Circle then Slinky'],
      chorus2Text: ['Elastic', 'Circle then Slinky'],
      chorus3Text: ['Tune', 'Double Slinky'],
      audio1: [glide1, circle1],
      audio2: [elastic2, circle2],
      audio3: [tune13, early3]
    },
    {
      format: 3,
      id: 'bass',
      header: 'Bass',
      chorus1Text: ['Elastic', 'Bells'],
      chorus2Text: ['Shadow', 'Bells'],
      chorus3Text: ['Shadow', 'Circle then normal'],
      audio1: [elastic1, bells1],
      audio2: [shadow2, bells2],
      audio3: [shadow3, circle3]
    }
  ]

  const { tutorialId } = useParams()
  const [currentPage, setCurrentPage] = useState()
  const [backButtonDestination, setBackButtonDestination] = useState()
  const [playButton, setPlayButton] = useState('START')

  useEffect(() => {
    const current = tutorialPage.find(page => page.id === tutorialId)
    setCurrentPage(current)
  }, [tutorialId])

  useEffect(() => {
    if (currentPage) {
      if (currentPage.id === 'tutorial') {
        setBackButtonDestination('/music/7')
      } else if (['knees', 'night', 'both'].includes(currentPage.id)) {
        setBackButtonDestination('/music/tutorial/tutorial')
      }
    }
  }, [currentPage])

  function controlButton (event) {
    if (event === 'START' ) {
      start()
    } else {
      stop()
    }
  }

  function start() {
    setPlayButton('STOP')


  }

  function stop() {
    setPlayButton('START')



  }

  const renderContent = () => {
    if (!currentPage) return null
    switch (currentPage.format) {
      case 1:
        return (
          <div className="tutorial-div">
            <h2 className='standard-text-header'>{currentPage.header}</h2>
            <p className='tutorial-text-content'>{currentPage.blurb}</p>
            <ul className='tutorial-list'>
              {
                currentPage.options.map((option, index) => (
                  <li key={option} className="standard-category-li">
                    <Link style={{ color: '#A7A7A7' }} to={`/music/tutorial/${currentPage.links[index]}`}>{option}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      case 2:
        return (
          <div className="tutorial-div">
            <h2 className='standard-text-header'>{currentPage.header}</h2>
            <p className='tutorial-text-content'>{currentPage.blurb}</p>
            <div className="project-image-div">
              <img src={currentPage.image} alt='website picture' className='' />
            </div>
            <ul className='tutorial-list'>
              {
                currentPage.choruses.map((chorus, index) => (
                  <li key={index} className="tutorial-li">
                    <p>Chorus {index + 1}: {chorus}</p>
                    <div>
                      <p><button onClick={() => controlButton(playButton)} className='tutorial-start-button'>{playButton}</button></p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        )
    }
  }

  if (!currentPage) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <Animated>
        <div className="standard-category-div">
          {renderContent()}
          <button><Link to={backButtonDestination}>Back</Link></button>
        </div>
      </Animated>

    </div>
  )
}