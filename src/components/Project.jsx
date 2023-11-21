import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import cmDatabaseImage from '../images/macbook-cm-database.webp'
import FroggusImage from '../images/macbook-froggus.webp'
import AAGMusicImage from '../images/macbook-aag.webp'
import AFJHImage from '../images/macbook-afjh.webp'

export default function Project() {
  const projects = [
    {
      title: 'CM Database',
      blurb: 'A search tool for church musicians to find music related to Biblical readings or themes.',
      skills: ['Django', 'PostgreSQL', 'Python', 'React'],
      gitHub: 'https://github.com/AnthonyFort/CM-Database-2#readme',
      visit: 'https://cm-database-a7b05e162636.herokuapp.com/',
      image: cmDatabaseImage
    },
    {
      title: 'Froggus Ad Parnassum',
      blurb: 'A game that teaches music theory - desktop only - Google Chrome required',
      skills: ['CSS', 'HTML', 'JavaScript'],
      gitHub: 'https://github.com/AnthonyFort/Froggus-ad-Parnassum/blob/main/README.md',
      visit: 'https://anthonyfort.github.io/Froggus-ad-Parnassum/',
      image: FroggusImage
    },
    {
      title: 'AAG Music',
      blurb: 'A music-sharing platform with a twist - group project.',
      skills: ['Express', 'MongoDB', 'Node', 'React'],
      gitHub: 'https://github.com/GhostieBby/aag-music-final/blob/main/README-anthony-fort.md',
      visit: 'https://aag-music-final-772143c93aa4.herokuapp.com/',
      image: AAGMusicImage
    },
    {
      title: 'AFJH Store',
      blurb: 'An imitation of a basic e-commerce site - pair project',
      skills: ['Bootstrap', 'React'],
      gitHub: 'https://github.com/AnthonyFort/afjh-store/blob/main/README-anthony-fort.md',
      visit: 'https://afjh-store.netlify.app/',
      image: AFJHImage
    }
  ]

  const { projectId } = useParams()

  return (
    <div className='standard-mobile-container'>
      <div className='standard-container project-container'>
        <h2 className='standard-text-header project-header-mobile'>{projects[projectId].title}</h2>
        <div className="project-image-div">
          <img src={projects[projectId].image} alt='website picture' className='project-image' />
        </div>
        <div className="project-text-div">
          <h2 className='standard-text-header project-header'>{projects[projectId].title}</h2>
          <p className='standard-text-content'>{projects[projectId].blurb}</p>
          <div className='skills-div'>
            <div className='project-buttons'>
              <button type='button' className='contact-submit project-button'><Link to={projects[projectId].gitHub} target='_blank'>GitHub</Link></button>
              <button type='button' className='contact-submit project-button'><Link to={projects[projectId].visit} target='_blank'>Visit</Link></button>
            </div>
            <h3 className='skills-text-header'>SKILLS</h3>
            <ul className='skills-list'>
              {
                projects[projectId].skills.map(skill => (
                  <li key={skill} className='skill-li'>
                    {skill}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div className='skills-div-mobile'>
        <div className='project-buttons'>
          <button type='button' className='contact-submit project-button'><Link to={projects[projectId].gitHub} target='_blank' >GitHub</Link></button>
          <button type='button' className='contact-submit project-button'><Link to={projects[projectId].visit} target='_blank' >Visit</Link></button>
        </div>
        <h3 className='skills-text-header'>SKILLS</h3>
        <ul className='skills-list'>
          {
            projects[projectId].skills.map(skill => (
              <li key={skill} className='skill-li'>
                {skill}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )

}