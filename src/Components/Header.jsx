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
      <div className="brand">React Hooks</div>
      <div className="header-links" id="links">
        <a className="link" href={"#home"}>
          Home
        </a>
        <div class="dropdown">
          <button class="dropbtn">Hooks <i class="fa-solid fa-chevron-down"></i></button>
          <div class="dropdown-content">
            <a href="#">useState</a>
            <a href="#">useEffect</a>
            <a href="#">useContext</a>
            <a href="#">useReducer</a>
            <a href="#">useCallBack</a>
            <a href="#">useMemo</a>
            <a href="#">useMemo</a>
          </div>
        </div>
      </div>
      <Link onClick={handleMenu} id="menu">
        <i class="fa-solid fa-bars"></i>
      </Link>
    </div>
  );
}