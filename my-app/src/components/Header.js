// import React from 'react';

// const Header = () => {
//   return (
//     <header>
      
//       <nav>
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#resume">Resume</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
