import "../Styles/Components/Abstract.css"
export function Abstract() {
    return (
      <div className="abstract-container" id="abstract">
        <div className="introduction">
          <p className="intro-par">
            CREATIVE <span>PROGRAMMER</span>
          </p>
          <div className="btns">
          <a href="#contact" className="btn-active">
            hire me
          </a>
          <a href="cv.pdf" className="btn">
            Download CV{" "}
            <i class="fa-solid fa-cloud-arrow-down download-icon"></i>
          </a>
          </div>
        </div>
        <div className="images">
          <img
            alt="images"
            src="about.png"
            className="image image1"
          />
          <img
            alt="images"
            src="abstract2.png"
            className="image image2"
          />
        </div>
      </div>
    );
}