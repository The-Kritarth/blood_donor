import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png';

export class Navbar extends Component {
  render() {
    return (
      <div>
        {/* #FF6666 */}
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#fd4a4aef"}}>
            <div className="container-fluid">
                <Link to="/"><img src={logo} style={{height:'5%',width:'150px',marginLeft:'55%',marginRight:'0%'}}></img></Link>
          
                
                <ul className="navbar-nav " style={{marginRight:'10%'}}>
                    <li className="nav-item" ><Link className="nav-link" aria-current="page" to="/"><b>Home</b></Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/About" ><b>About</b></Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/FAQS"><b>FAQS</b></Link></li>  
                </ul>
                
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
