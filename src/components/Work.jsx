import Animated from './Animated'
import { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import masters from '../images/masters.webp'
import podcast from '../images/podcast.webp'
import recording from '../recordings/phd-talk.mp3'

export default function Work() {

  const phdTalk = [
    { 'text': 'Very often when you listen to music,', 'time': 0 },
    { 'text': 'you’ll experience the urge to tap your foot.', 'time': 1151 },
    { 'text': 'What you’re tapping is the beat.', 'time': 2504 },
    { 'text': 'And that feeling of a beat occurs', 'time': 3245 },
    { 'text': 'when neurons in your brain', 'time': 4150 },
    { 'text': 'detect regular pulsations in the environment,', 'time': 4900 },
    { 'text': 'and match those pulsations', 'time': 6250 },
    { 'text': 'in a process called entrainment.', 'time': 7138 },
    { 'text': 'It’s an unavoidable reaction,', 'time': 8078 },
    { 'text': 'but it’s very useful for musical perception.', 'time': 9176 },
    { 'text': '[BREATH]', 'time': 10245 },
    { 'text': 'If a piece of music is a sequence of events', 'time': 10637 },
    { 'text': 'in a span of time,', 'time': 11870 },
    { 'text': 'the beat cuts the span into regular parts,', 'time': 12479 },
    { 'text': 'which groups those events into neat little chunks,', 'time': 13700 },
    { 'text': 'chunks we experience as musical rhythms.', 'time': 14877 },
    { 'text': '[BREATH]', 'time': 16127 },
    { 'text': 'But in the last century,', 'time': 16409 },
    { 'text': 'composers of modernist classical music', 'time': 16992 },
    { 'text': 'have often written music', 'time': 18151 },
    { 'text': 'which lacks those regular pulsations.', 'time': 18713 },
    { 'text': '[BREATH]', 'time': 19745 },
    { 'text': 'And without those regular pulsations,', 'time': 20000 },
    { 'text': 'listeners often struggle', 'time': 20977 },
    { 'text': 'to break down that chain of events,', 'time': 21627 },
    { 'text': 'which makes the music a lot harder to process.', 'time': 22599 },
    { 'text': '[BREATH]', 'time': 23804 },
    { 'text': 'As a listener, personally,', 'time': 24228 },
    { 'text': 'I was frustrated by this,', 'time': 24859 },
    { 'text': 'but I didn’t want to give up,', 'time': 25603 },
    { 'text': 'so I looked for a solution', 'time': 26200 },
    { 'text': 'and the thing about a beat', 'time': 26908 },
    { 'text': 'is that it you don’t need sound to feel a beat.', 'time': 27500 },
    { 'text': '[BREATH]', 'time': 28490 },
    { 'text': 'You can also feel a beat', 'time': 28797 },
    { 'text': 'by moving your body like a dancer.', 'time': 29359 },
    { 'text': 'So I took a short excerpt', 'time': 30388 },
    { 'text': 'from a famous modernist composition,', 'time': 31130 },
    { 'text': 'with no obvious beat,', 'time': 32238 },
    { 'text': '[BREATH]', 'time': 32829 },
    { 'text': 'and by listening to it 100s of times,', 'time': 33000 },
    { 'text': 'I realized that if I moved in a certain way,', 'time': 33992 },
    { 'text': 'the music sounded as if it had a beat.', 'time': 35124 },
    { 'text': '[BREATH]', 'time': 36134 },
    { 'text': 'And with a beat,', 'time': 36321 },
    { 'text': 'that long chain of events', 'time': 36697 },
    { 'text': 'became manageable chunks', 'time': 37262 },
    { 'text': 'which I could comprehend as clear musical rhythms.', 'time': 37884 },
    { 'text': '[BREATH]', 'time': 39289 },
    { 'text': 'Hearing this once confusing music', 'time': 39554 },
    { 'text': 'with such clarity was a revelation,', 'time': 40547 },
    { 'text': 'but it got more interesting.', 'time': 41502 },
    { 'text': '[BREATH]', 'time': 42165 },
    { 'text': 'Because the music had no obvious', 'time': 42370 },
    { 'text': 'and unavoidable beat to begin with,', 'time': 43234 },
    { 'text': 'I realized that I could choose', 'time': 44089 },
    { 'text': 'what speed my beat was going to be.', 'time': 44820 },
    { 'text': '[BREATH]', 'time': 45683 },
    { 'text': 'And depending on whether the beat', 'time': 46030 },
    { 'text': 'was small and fast or big and slow,', 'time': 46651 },
    { 'text': 'affected how the events were grouped,', 'time': 47474 },
    { 'text': 'which affected what rhythms I heard.', 'time': 48551 },
    { 'text': '[BREATH]', 'time': 49283 },
    { 'text': 'That’s why rhythm in modernist classical music', 'time': 49575 },
    { 'text': 'sounds different, depending on how you move.', 'time': 50648 },
    { 'text': '[BREATH]', 'time': 51738 },
    { 'text': 'Feeling this was significant,', 'time': 51954 },
    { 'text': 'I videotaped myself doing 5 different dances,', 'time': 52683 },
    { 'text': 'allowing others to hear this music', 'time': 54165 },
    { 'text': 'in 5 different ways.', 'time': 55068 },
    { 'text': '[BREATH]', 'time': 55513 },
    { 'text': 'Now interestingly,', 'time': 55745 },
    { 'text': 'even though these 5 versions all sound different,', 'time': 56363 },
    { 'text': 'they all resemble the rhythms', 'time': 57586 },
    { 'text': 'of the music I grew up listening to.', 'time': 58321 },
    { 'text': '[BREATH]', 'time': 59172 },
    { 'text': 'So this suggests', 'time': 59374 },
    { 'text': 'that the range of possible rhythms', 'time': 60040 },
    { 'text': 'I can experience is both', 'time': 60863 },
    { 'text': 'enabled and yet constrained', 'time': 61502 },
    { 'text': 'by the musical culture I grew up in.', 'time': 62349 },
    { 'text': '[BREATH]', 'time': 63325 },
    { 'text': 'Now that is not a new idea.', 'time': 63668 },
    { 'text': 'But I argue that this unusual experience', 'time': 64363 },
    { 'text': 'of listening 100s of times to', 'time': 65600 },
    { 'text': 'something you find confusing', 'time': 66457 },
    { 'text': '[BREATH]', 'time': 67280 },
    { 'text': 'allows an individual to witness', 'time': 67485 },
    { 'text': 'their own perceptual biases in action.', 'time': 68457 },
    { 'text': 'And that is a powerful experience.', 'time': 69606 },
    { 'text': '[BREATH]', 'time': 70564 },
    { 'text': 'From it, I’ve learnt that faced with complexity,', 'time': 70784 },
    { 'text': 'my culture has given me a handful of ways', 'time': 72283 },
    { 'text': 'to structure reality,', 'time': 73370 },
    { 'text': 'but only a handful of ways.', 'time': 74071 },
    { 'text': '[BREATH]', 'time': 74807 },
    { 'text': 'To increase the range', 'time': 75138 },
    { 'text': 'of possible solutions to a complex situation', 'time': 75651 },
    { 'text': 'would require ways of thinking', 'time': 76960 },
    { 'text': 'only found in other cultures.', 'time': 77752 },
    { 'text': '[BREATH]', 'time': 78634 },
    { 'text': 'What I’m suggesting is that music', 'time': 78818 },
    { 'text': 'can sometimes help us think', 'time': 79718 },
    { 'text': 'about other important things.', 'time': 80398 },
    { 'text': '[BREATH]', 'time': 81113 },
    { 'text': 'But don’t wait for me to tell you that.', 'time': 81390 },
    { 'text': '[BREATH]', 'time': 82500 },
    { 'text': 'Your own enlightenment', 'time': 82645 },
    { 'text': 'is just a few hundred', 'time': 83266 },
    { 'text': 'frustrating experiences away.', 'time': 83909 }
  ]

  const projects = [
    {
      title: "PhD Research",
      format: 1,
    },
    {
      title: "Musical 'Decoding'",
      format: 0,
      blurb: (
        <div className='music-text-div'>
          <p>I’m often asked if coding and music are related. I’m not sure, but it was cool to notice that musical ‘Set Theory’ and JavaScript Sets bear resemblance to one another.</p>
          <p>In my Masters thesis, I used Set Theory to ‘decode’ a hidden pattern in an orchestral work by the English composer George Benjamin.</p>
        </div>
      ),
      media: masters
    },
    {
      title: "Fun Kid's Stuff",
      format: 0,
      blurb: (
        <div className='music-text-div'>
          <p>I used to have over 40 piano students, mostly children. For the little ones, I made silly music videos!</p>
        </div>
      ),
      media: 'https://www.youtube.com/embed/EwwrAh_IneY'
    },
    {
      title: "Podcast",
      format: 0,
      blurb: (
        <div className='music-text-div'>
          <p>I love podcasts, but I could never find one that went deep into the creative process. So I made this.</p>
          <button><Link to='https://podcasts.apple.com/us/podcast/psychology-for-songwriters/id1665379292' target='_blank'>Listen</Link></button>
        </div>
      ),
      media: podcast
    },
    {
      title: "The 'Even-Note' Illusion",
      format: 0,
      blurb: (
        <div className='music-text-div'>
          <p>I created an auditory illusion as an appendix to my PhD thesis.</p>
          <p>Aside from being fun, illusions help us understand human perception.</p>
        </div>
      ),
      media: 'https://www.youtube.com/embed/jPP8mfLyGRg?list=PL9NhgGsNfA7XNZ9Ml_T0ZG664XA--1_By'
    },
    {
      title: "Songwriting",
      format: 0,
      blurb: (
        <div className='music-text-div'>
          <p>I started songwriting because I enjoy solving the puzzle of musical structure. Over time, however, it’s a tool for exploring my emotions.</p>
        </div>
      ),
      media: 'https://www.youtube.com/embed/VbWTmpNSTKU'
    },
    {
      title: "University Teaching",
      format: 0,
      blurb: (
        <div className='music-text-div'>
          <p>I have a decade of experience teaching at degree level.</p>
          <p>This free online course I made provides a foundation in Classical keyboard improvisation.</p>
        </div>
      ),
      media: 'https://www.youtube.com/embed/-zs8MLRk45c?list=PL9NhgGsNfA7XVmCLy1IUJQRRdqBLyJq1p'
    },
    {
      title: "Union Chapel",
      format: 0,
      blurb: (
        <div className='music-text-div'>
          <p>When I'm not coding, I'm the Director of Music at Union Chapel Church, Islington.</p>
          <Link style={{ color: '#A7A7A7' }} to={'/music/tutorial/tutorial'}>Tutorial</Link>
        </div>
      ),
      media: 'https://www.youtube.com/embed/59uGN0oxS6A'
    },
  ]

  const { workId } = useParams()

  function renderMedia(media, title) {
    if (media.includes('youtube.com')) {
      return (
        <div className="ratio ratio-16x9">
          <iframe
            src={media}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    } else {
      return <img src={media} alt={title} className="img-fluid music-img" />
    }
  }

  const [currentText, setCurrentText] = useState('')
  const [playButton, setPlayButton] = useState('START')
  const audioRef = useRef(new Audio(recording))

  let myInterval = 0

  useEffect(() => {
    audioRef.current = new Audio(recording);
  }, []);

  useEffect(() => {
    return () => {
        audioRef.current.pause()
    }
}, [])

  function controlButton (event) {
    if (event === 'START' ) {
      start()
    } else {
      stop()
    }
  }

  function start() {
    setPlayButton('STOP')
    myInterval = setInterval(checkTime, 70)
    audioRef.current.play()
  }

  function stop() {
    setPlayButton('START')
    clearInterval(myInterval)
    audioRef.current.pause()
    setCurrentText('')
  }

  function checkTime() {
    const closeLines = phdTalk.filter(item => (
      Math.abs(item.time / 1000 - audioRef.current.currentTime) ** 2 <= 1
    ))
    if (closeLines.length > 0) {
      setCurrentText(closeLines[0].text)
    }
  }

  return (
    <Animated>
      {
        projects[workId].format === 0 ?
          <div className='standard-mobile-container'>
            <div className='music-container'>
              <h2 className='standard-text-header project-header-mobile'>{projects[workId].title}</h2>
              <div className="music-image-div">
                {renderMedia(projects[workId].media, projects[workId].title)}
              </div>
              <div className="project-text-div">
                <h2 className='standard-text-header project-header music-header'>{projects[workId].title}</h2>
                <div className='standard-text-content'>{projects[workId].blurb}</div>
              </div>
            </div>
          </div>
          :
          <div className='phd-container'>
            <div className='bubble1'>
              <p>So tell me, what was your PhD thesis about?</p>
            </div>
            <div className='bubble2'>
              <p>{currentText}</p>
            </div>
            <div>
              <p><button onClick={() => controlButton(playButton)} className='start-button'>{playButton}</button></p>
            </div>
          </div>
      }
    </Animated>
  )
}