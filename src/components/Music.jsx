import { Link } from 'react-router-dom'
import Animated from './Animated'

export default function Music() {
  const musicWork = [
    {
      title: "PhD Research",
      id: 0,
    },
    {
      title: "Musical 'Decoding'",
      id: 1,
    },
    {
      title: "Fun Kid's Stuff",
      id: 2,
    },
    {
      title: "Podcast",
      id: 3,
    },
    {
      title: "The 'Even-Note' Illusion",
      id: 4,
    },
    {
      title: "Songwriting",
      id: 5,
    },
    {
      title: "University Teaching",
      id: 6,
    },
    {
      title: "Union Chapel",
      id: 7,
    },
  ]

  return (
    <Animated>
      <div className="standard-category-div">
        <h2 className='standard-text-header'>MUSIC</h2>
        <ul className="standard-category-list">
          {musicWork.map(item => (
            <li key={item.id} className="standard-category-li">
              <Link style={{ color: '#A7A7A7' }} to={`/music/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Animated>
  )
}