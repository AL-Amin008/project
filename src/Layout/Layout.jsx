// // src/components/Layout.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/team">Team</Link>
//             </li>
//             <li>
//               <Link to="/service">Service</Link>
//             </li>
//             <li>
//               <Link to="/project">Project</Link>
//             </li>
//             <li>
//               <Link to="/testimonials">Testimonials</Link>
//             </li>
//             {/* Add more navigation links for other pages */}
//           </ul>
//         </nav>
//       </header>

//       <main>{children}</main>

//       <footer>
//         <p>&copy; 2023 Your Company</p>
//       </footer>
//     </div>
//   );
// };

// export default Layout;
import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

class Layout extends React.Component {
  render(){
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout;
