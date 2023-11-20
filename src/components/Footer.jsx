import { Link } from 'react-router-dom'

import { IoPersonOutline } from 'react-icons/io5'
import { HiOutlineCodeBracketSquare } from 'react-icons/hi2'
import { SiApplemusic } from 'react-icons/si'
import { AiOutlineMail } from 'react-icons/ai'





export default function Footer() {

  const navItems = [
    {
      navImage: <IoPersonOutline />,
      navText: 'about'
    },
    {
      navImage: <HiOutlineCodeBracketSquare />,
      navText: 'coding'
    },
    {
      navImage: <SiApplemusic />,
      navText: 'music'
    },
    {
      navImage: <AiOutlineMail />,
      navText: 'contact'
    },
  ]

  return (
    <>
      <div className='footer-nav'>
          <ul className='footer-list'>
            {
              navItems.map((item) => (
                <li key={item.navText} className='footer-nav-li'>
                  <div>{item.navImage}</div>
                  <Link className='nav-text' to={`/${item.navText}`}>{item.navText.toUpperCase()}</Link>
                </li>
              ))
            }
          </ul>
      </div>
      <div className='footer-div' >
        <p className='footer-text'>Made with Vite React</p>
      </div >
    </>
  )
}