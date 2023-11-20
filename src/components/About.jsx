import AboutPic from '../images/about-pic.webp'

export default function About() {

  const skills = [
    'Bootstrap',
    'CSS',
    'Django',
    'Express',
    'HTML',
    'JavaScript',
    'MongoDB',
    'Node',
    'Pandas',
    'PostgreSQL',
    'Python',
    'React'
  ]
  return (
    <div className='standard-mobile-container'>
      <div className='standard-container'>
        <div className="standard-image">
          <img src={AboutPic} alt='website picture' className='about-pic' />
          <p className='photo-credit'>Photo by Fabio Tedde</p>
        </div>
        <div className="standard-text-div">
          <h2 className='standard-text-header'>ABOUT</h2>
          <p className='standard-text-content'>I’m a software developer with a background in music. I aim to deliver products that are clean, intuitive, efficient, and secure.</p>
          <p className='standard-text-content standard-p-2'>I’m available for work, so please get in touch.</p>
          <div className='skills-div'>
            <h3 className='skills-text-header'>SKILLS</h3>
            <ul className='skills-list'>
              {
                skills.map(skill => (
                  <li key={skill} className='skill-li'>
                    {skill}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <p className='standard-text-content standard-p-2-mobile'>I’m available for work, so please get in touch.</p>
      <div className='skills-div-mobile'>
        
        <h3 className='skills-text-header'>SKILLS</h3>
        <ul className='skills-list'>
          {
            skills.map(skill => (
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