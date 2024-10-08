import Image from 'next/image'
import x from '../public/image/x.png';
export default function Navbar() {
    return (
      <nav className="navbar navbar-default navbar-sticky bootsnav">
      <div className="container">
      <div className="row"> 
      <div className="attr-nav">
      <a className="sponsor-button" href="sponsor-a-child.html">sponsor a child</a>
      <a className="donation" href="donate.html">donate now</a>
      </div>           
      <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
      <i className="fa fa-bars"></i>
      </button>
      <a className="navbar-brand logo" href="index.html">
      <Image
      src={x}
      width={50}
      height={50}
      alt="Picture of the author"
    />
      </a>
      </div>
      <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
      <li><a href="index.html">Home</a></li>
      <li><a href="about-us.html">About Us</a></li>
      <li><a href="activities.html">Activities</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="contact.html">Contact Us</a></li>
      </ul>
      </div>
      </div>
      </div>
      </nav>

    );
  }