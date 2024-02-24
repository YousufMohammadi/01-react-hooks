import { Link } from "react-router-dom";
import "../Styles/Components/Footer.css"
export function Footer() {
    return (
      <div className="footer-container">
        <img src="techLand.png" alt="techLand" className="logo" />
        <p className="footer-description">
          TechLand has now started to create different systems with an extremely
          expert team with a lot of experience in designing and managing
          websites, mobile applications (Android and iPhone), databases and
          management systems, and it can be the best choice for your different
          definition in the job market
        </p>
        <h2 className="footer-heading">Follow me on Social Media !</h2>
        <div className="socials">
          <Link
            to={"https://www.facebook.com/yousuf.mohammadi.71"}
            className="social"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </Link>
          <Link to={"https://t.me/Mh_Yousuf"} className="social">
            <i class="fa-brands fa-telegram"></i>
          </Link>
          <Link to={"https://github.com/YousufMohammadi"} className="social">
            <i class="fa-brands fa-github"></i>
          </Link>
          <Link to={"https://www.youtube.com/@protips1157"} className="social">
            <i class="fa-brands fa-youtube"></i>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/yousuf-mohammadi/"}
            className="social"
          >
            <i class="fa-brands fa-linkedin"></i>
          </Link>
          <Link to={"https://x.com/yousufm1157?s=09"} className="social">
            <i class="fa-brands fa-x-twitter"></i>
          </Link>
          <Link to={"https://medium.com/@yousufmohammadi"} className="social">
            <i class="fa-brands fa-medium"></i>
          </Link>
        </div>
      </div>
    );
}