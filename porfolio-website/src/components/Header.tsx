import Logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <header className='header'>
    <nav>
        <a href="#hero" className='logo-container'>
          <img src={Logo} className="logo" alt="Vite logo" />
        </a>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
        </ul>

        <div className='btn-container'>
        <button>Download CV</button>
        </div>
    </nav>
  </header>
  )
}

export default Header