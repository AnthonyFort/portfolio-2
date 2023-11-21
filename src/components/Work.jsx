import Animated from './Animated'
import { Link, useParams } from 'react-router-dom'
import masters from '../images/masters.webp'
import podcast from '../images/podcast.webp'

export default function Work() {

  const projects = [
    {
      title: "PhD Research",
      format: 1,
    },
    {
      title: "Musical 'Decoding'",
      format: 0,
      blurb: (
        <>
          <p>I’m often asked if coding and music are related. I’m not sure, but it was cool to notice that musical ‘Set Theory’ and JavaScript Sets bear resemblance to one another.</p>
          <p>In my Masters thesis, I used Set Theory to ‘decode’ a hidden pattern in an orchestral work by the English composer George Benjamin.</p>
        </>
      ),
      media: masters
    },
    {
      title: "Fun Kid's Stuff",
      format: 0,
      blurb: (
        <>
          <p>I used to have over 40 piano students, mostly children. For the little ones, I made silly music videos!</p>
        </>
      ),
      media: 'https://www.youtube.com/embed/EwwrAh_IneY'
    },
    {
      title: "Podcast",
      format: 0,
      blurb: (
        <>
          <p>I love podcasts, but I could never find one that went deep into the creative process. So I made this.</p>
          <button><Link to='https://podcasts.apple.com/us/podcast/psychology-for-songwriters/id1665379292' target='_blank'>Listen</Link></button>
        </>
      ),
      media: podcast
    },
    {
      title: "The 'Even-Note' Illusion",
      format: 0,
      blurb: (
        <>
          <p>I created an auditory illusion as an appendix to my PhD thesis.</p>
          <p>Aside from being fun, illusions help us understand human perception.</p>
        </>
      ),
      media: 'https://www.youtube.com/embed/jPP8mfLyGRg?list=PL9NhgGsNfA7XNZ9Ml_T0ZG664XA--1_By'
    },
    {
      title: "Songwriting",
      format: 0,
      blurb: (
        <>
          <p>I started songwriting because I enjoy solving the puzzle of musical structure. Over time, however, it’s a tool for exploring my emotions.</p>
        </>
      ),
      media: 'https://www.youtube.com/embed/VbWTmpNSTKU'
    },
    {
      title: "University Teaching",
      format: 0,
      blurb: (
        <>
          <p>I have a decade of experience teaching at degree level.</p>
          <p>This free online course I made provides a foundation in Classical keyboard improvisation.</p>
        </>
      ),
      media: 'https://www.youtube.com/embed/-zs8MLRk45c?list=PL9NhgGsNfA7XVmCLy1IUJQRRdqBLyJq1p'
    },
    {
      title: "Union Chapel",
      format: 0,
      blurb: (
        <>
          <p>When I'm not coding, I'm the Director of Music at Union Chapel Church, Islington.</p>
        </>
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

  return (
    <Animated>
      {
        projects[workId].format === 0 ?
          <div className='standard-mobile-container'>
            <div className='standard-container project-container'>
              <h2 className='standard-text-header project-header-mobile'>{projects[workId].title}</h2>
              <div className="project-image-div">
                {renderMedia(projects[workId].media, projects[workId].title)}
              </div>
              <div className="project-text-div">
                <h2 className='standard-text-header project-header'>{projects[workId].title}</h2>
                <div className='standard-text-content'>{projects[workId].blurb}</div>
              </div>
            </div>
          </div>
          :
          <p>Loading</p>
      }
    </Animated>
  )
}