import Image from "../R-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="Footer">
      {/* <div id="FooterContent">
       
          <img className="FooterImage" src={Image} alt="Text that says my name" />

        <div className="LinkDiv">
          <h5 className="LinksHeader">Links</h5>
          <a href="https://github.com/RJAttwell">
            <p style={{ color: "black" }}>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/richardattwell/">
            <p style={{ color: "black" }}>LinkedIn</p>
          </a>
        </div>

        <div className="InfoDiv">
          <h5 className="InfoHeader">Information</h5>

          <p>
            <i
              class="fa-solid fa-location-dot"
              style={{ color: "#000000;" }}
            ></i>{" "}
            Wexford, Ireland
          </p>

          <p>
            <i class="fa-solid fa-envelope" style={{ color: "#000000;" }}></i>{" "}
            RichardJAttwell@gmail.com
          </p>

          <p>
            <i class="fa-solid fa-phone" style={{ color: "#000000;" }}></i>{" "}
            +353838219590
          </p>
        </div>

        <div className="ProjectsFooteeDiv">
          <h5 className="ProjectsFooterHeader">Projects</h5>
          <p>Team Taverns</p>
          <p>ClassPal</p>
          <p>Blog Website</p>
          <p>Bulking Information Site</p>
          <p>GameRank</p>
        </div>
      </div> */}

      <div class="column">
        <a href="/">
          <img
            className="FooterImage"
            src={Image}
            alt="Text that says my name"
          />
        </a>
      </div>

      <div class="column">
        {" "}
        <h5 className="InfoHeader">Information</h5>
        <p>
          <i class="fa-solid fa-location-dot" style={{ color: "#000000;" }}></i>{" "}
          Wexford, Ireland
        </p>
        <p>
          <i class="fa-solid fa-envelope" style={{ color: "#000000;" }}></i>{" "}
          RichardJAttwell@gmail.com
        </p>
        <p>
          <i class="fa-solid fa-phone" style={{ color: "#000000;" }}></i>{" "}
          +353838219590
        </p>
      </div>

      <div class="column">
        <h5 className="ProjectsFooterHeader">Projects</h5>
        <a href="https://github.com/RJAttwell/Team-Taverns">
          <p>Team Taverns</p>
        </a>
        <a href="https://github.com/AlexanderNorton/classpal-frontend">
          <p>ClassPal</p>
        </a>
        <a href="https://github.com/RJAttwell/Blog-Website-v2">
          <p>Blog Website</p>
        </a>

        <p>Bulking Information Site</p>

        <p>GameRank</p>
      </div>

      <div class="column">
        <h5 className="LinksHeader">Links</h5>
        <a href="https://github.com/RJAttwell">
          <p>Github</p>
        </a>
        <a href="https://www.linkedin.com/in/richardattwell/">
          <p>LinkedIn</p>
        </a>
      </div>
    </footer>
  );
}
