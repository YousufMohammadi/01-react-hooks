import { Link } from "react-router-dom";
import "../Styles/Components/About.css"
import { useState } from "react";
import { BIO, EDUCATION, EXPERIENCE } from "../Constants/Constants";
export function About() {
    const [text, setText] = useState(BIO);
    const [type, setType] = useState("string");
    return (
      <div className="about-container" id="about">
        <p className="section-heading">
          About <span>Me</span>
        </p>
        <div className="btns">
          <Link
            to={"#"}
            className="btn-active"
            id="btn1"
            onClick={() => {
              setText(BIO);
              setType("string");
              document.getElementById("btn1").classList.remove("btn");
              document.getElementById("btn1").classList.add("btn-active");
              document.getElementById("btn2").classList.add("btn");
              document.getElementById("btn3").classList.add("btn");
            }}
          >
            Bio
          </Link>
          <Link
            to={"#"}
            className="btn"
            id="btn2"
            onClick={() => {
              setText(EDUCATION);
              setType("list");
              document.getElementById("btn2").classList.remove("btn");
              document.getElementById("btn2").classList.add("btn-active");
              document.getElementById("btn1").classList.add("btn");
              document.getElementById("btn3").classList.add("btn");
            }}
          >
            Education
          </Link>
          <Link
            to={"#"}
            className="btn"
            id="btn3"
            onClick={() => {
              setText(EXPERIENCE);
              setType("list");
              document.getElementById("btn3").classList.remove("btn");
              document.getElementById("btn3").classList.add("btn-active");
              document.getElementById("btn1").classList.add("btn");
              document.getElementById("btn2").classList.add("btn");
            }}
          >
            Experience
          </Link>
        </div>
        <h2 className="brand">A Little About Me And My Passion</h2>
        <div className="about">
          <img src="yousuf.jpg" alt="about" className="myImage" />
          {type === "string" ?
          <p className="par">{text}</p>
          :
          <ul>
            {
              text.map((t,index)=>{
                return <li key={index}>{t}</li>;
              })
            }
          </ul>
          }
        </div>
      </div>
    );
}