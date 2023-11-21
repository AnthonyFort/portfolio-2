import { useParams } from 'react-router-dom'

import cmDatabaseImage from '../images/macbook-cm-database.webp'
import FroggusImage from '../images/macbook-froggus.webp'
import AAGMusicImage from '../images/macbook-aag.webp'
import AFJHImage from '../images/macbook-afjh.webp'

export default function Project () {
  const projects = [
    {
      title: 'CM Database',
      blurb: 'A search tool for church musicians to find music related to Biblical readings or themes.',
      skills: ['Django', 'PostgreSQL', 'Python', 'React'],
      image: cmDatabaseImage
    },
    {
      title: 'Froggus Ad Parnassum',
      blurb: 'A game that teaches music theory - desktop only - Google Chrome required',
      skills: ['CSS', 'HTML', 'JavaScript'],
      image: FroggusImage
    },
    {
      title: 'AAG Music',
      blurb: 'A music-sharing platform with a twist - group project.',
      skills: ['Express', 'MongoDB', 'Node', 'React'],
      image: AAGMusicImage
    },
    {
      title: 'AFJH Store',
      blurb: 'An imitation of a basic e-commerce site - pair project',
      skills: ['Bootstrap', 'React'],
      image: AFJHImage
    }
  ]

  const { projectId } = useParams()

  return (
    <div className='standard-mobile-container'>
    <div className='standard-container'>
      <div className="project-image-div">
        <img src={projects[projectId].image} alt='website picture' className='project-image' />
      </div>
      <div className="project-text-div">
        <h2 className='standard-text-header'>{projects[projectId].title}</h2>
        <p className='standard-text-content'>{projects[projectId].blurb}</p>
        <div className='skills-div'>
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