import { Link, useNavigate } from "react-router-dom";
import "../Styles/Components/Header.css"
export function Header() {
  const navigate = useNavigate()
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
        <a className="link"  onClick={()=>navigate("/home")}>
          Home
        </a>
        <div class="dropdown">
          <button class="dropbtn">Hooks <i class="fa-solid fa-chevron-down"></i></button>
          <div class="dropdown-content">
            <a onClick={()=>navigate("/useState")}>useState</a>
            <a>useEffect</a>
            <a>useContext</a>
            <a>useReducer</a>
            <a>useCallBack</a>
            <a>useMemo</a>
            <a>useMemo</a>
          </div>
        </div>
      </div>
      <Link onClick={handleMenu} id="menu">
        <i class="fa-solid fa-bars"></i>
      </Link>
    </div>
  );
}