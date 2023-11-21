import { Link } from 'react-router-dom'
import Animated from './Animated'

export default function Coding() {

  const projects = [
    {
      title: 'CM Database',
      id: 0
    },
    {
      title: 'Froggus Ad Parnassum',
      id: 1
    },
    {
      title: 'AAG Music',
      id: 2
    },
    {
      title: 'AFJH Store',
      id: 3
    },
  ]

  return (
    <Animated>
      <div className="standard-category-div">
        <h2 className='standard-text-header'>CODING</h2>
        <ul className="standard-category-list">
          {projects.map(project => (
            <li key={project.id} className="standard-category-li">
              <Link style={{ color: '#A7A7A7' }} to={`/coding/${project.id}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Animated>
  )
}