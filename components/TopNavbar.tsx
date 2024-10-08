import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function TopNavbar(){
    return (
        <div className="topbar">
        <div className="container">
        <div className="row"> 
        <div className="bar-phone">
        <i className="fa fa-phone"></i> <span>Call Us :</span> <strong>+1-310-341-3870</strong>
        </div>
        <div className="bar-mail">
        <i className="fa fa-envelope"></i> <span>Mail Us :</span> <strong>info@charityhope.com</strong>
        </div>
        <div className="header-social">
        <a className="facebook" href="#" title="facebook" target="_blank" rel="nofollow"><img src ="./facebook.png"/>  </a>
        <a className="twitter" href="#" title="twitter" target="_blank" rel="nofollow"><i className="fa fa-twitter"></i>  </a>
        <a className="linkedin" href="#" title="linkedin" target="_blank" rel="nofollow"><i className="fa fa-linkedin"></i>  </a>
        <a className="google" href="#" title="google-plus" target="_blank" rel="nofollow"><i className="fa fa-google-plus"></i>  </a>
        <a className="youtube" href="#" title="youtube-play" target="_blank" rel="nofollow"><i className="fa fa-youtube-play"></i>  </a>
        </div>
        </div>
        </div>
        </div>

    )
}