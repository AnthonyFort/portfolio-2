import { Link } from 'react-router-dom'

export default function Coding () {

  const projects = [
    'CM Database',
    'Froggus Ad Parnassum',
    'AAG Music',
    'AFJH Store',
  ]

  return (
    <div className="standard-category-div">
      <h2 className='standard-text-header'>CODING</h2>
      <ul className="standard-category-list">
        {projects.map(project => (
          <li key={project} className="standard-category-li">
            <Link style={{color: '#A7A7A7'}}>{project}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}