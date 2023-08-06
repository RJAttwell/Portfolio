import Image from "../R-removebg-preview.png"

export default function Navbar() {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container-fluid">
          <div className="NavImage">
            <a class="navbar-brand" href="#">
              <img className="NavbarLogo" src={Image} alt="Site Logo that says Richard Attwell" />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="NavList navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#AboutSection">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#ProjectsSection"
                >
                  Projects
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#FooterContent">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
