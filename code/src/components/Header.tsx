// import React from 'react';
// import logo from '../assets/logo.png'; // Import the image file


// function Header() {
//   const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
//     event.preventDefault();
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="sticky-header">
//       <a href="#about" className="logo" onClick={(event) => handleMenuClick(event, 'hero')}>
//         <img src={logo} alt="Logo" /> {/* Use the image in the logo */}
//       </a>
//       <nav className="menu">
//         <ul>
//           <li><a href="#about" onClick={(event) => handleMenuClick(event, 'about')}>About</a></li>
//           <li><a href="#skills" onClick={(event) => handleMenuClick(event, 'skills')}>Skills</a></li>
//           <li><a href="#portfolio" onClick={(event) => handleMenuClick(event, 'portfolio')}>Portfolio</a></li>
//           <li><a href="#testimonial" onClick={(event) => handleMenuClick(event, 'testimonial')}>Testimonial</a></li>
//         </ul>
//       </nav>
//       <div className="resume-button">
//         <button>Download Resume</button>
//       </div>
//     </header>
//   );
// }

// export default Header;
import { useState } from 'react';
import logo from '../assets/logo.png'; // Import the image file

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (event:any, sectionId:any) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close the menu after clicking on a menu item
    }
  };

  return (
    <header className={`sticky-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <a href="#about" className="logo" onClick={(event) => handleMenuClick(event, 'hero')}>
        <img src={logo} alt="Logo" className="logo-image" /> {/* Use the image in the logo */}
      </a>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className="menu-list">
          <li><a href="#about" onClick={(event) => handleMenuClick(event, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(event) => handleMenuClick(event, 'skills')}>Skills</a></li>
          <li><a href="#portfolio" onClick={(event) => handleMenuClick(event, 'portfolio')}>Portfolio</a></li>
          <li><a href="#testimonial" onClick={(event) => handleMenuClick(event, 'testimonial')}>Testimonial</a></li>
        </ul>
      </div>
      <div className="resume-button">
        <button>Download Resume</button>
      </div>
    </header>
  );
}

export default Header;
