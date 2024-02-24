import { Link } from "react-router-dom";
import "../Styles/Components/Header.css"
export function Header() {
  function handleMenu() {
    var x = document.getElementById("links");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
    return (
      <div className="header-container">
        <div className="brand">Yousuf Mohammadi</div>
        <div className="header-links" id="links">
          <a className="link" href={"#home"}>
            Home
          </a>
          <a className="link" href={"#about"}>
            About
          </a>
          <a className="link" href={"#skills"}>
            Skills
          </a>
          <a className="link" href={"#projects"}>
            Projects
          </a>
          <a className="link" href={"#contact"}>
            Contact
          </a>
        </div>
        <Link onClick={handleMenu} id="menu">
          <i class="fa-solid fa-bars"></i>
        </Link>
      </div>
    );
}