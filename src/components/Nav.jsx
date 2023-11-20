import { Link } from 'react-router-dom'

export default function Nav() {

  const navLinks = ['about', 'coding', 'music', 'contact']

  return (
    <div className='nav-container'>
      <div>
        <h1 className="nav-name">Anthony Fort</h1>
      </div>
      <div>
        <ul className='nav-list'>
          {
            navLinks.map((item) => (
              <li key={item} className='nav-li'>
                <Link className='nav-text' to={`/${item}`}>{item.toUpperCase()}</Link>
                <p className='nav-p'>/</p>
              </li>
            ))
          }
        </ul>
      </div>
      <p className='tech-text'>Made with Vite React</p>
    </div>
  )
}