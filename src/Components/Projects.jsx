export default function Projects() {
  return (
    <section id="ProjectsSection">
      <div className="projectText">
        <h6 className="projectsSmallText">Feel free to browse my</h6>
        <h1 className="projectBigText">Projects</h1>
      </div>

      <div class="container cardContainer1">
        <div class="row">
          <div class="col-6">
            <div class="card Card1">
              <img
                class="card-img-top "
                src="https://media.licdn.com/dms/image/D4E2DAQHMtXWrUXVmOQ/profile-treasury-image-shrink_800_800/0/1687140782390?e=1691690400&v=beta&t=eSE8mIihBuVZ3oexuL3ErZPlfj7EolCZbMUKcrH_7Lc"
                alt=""
              />

              <div class="card-body">
                <h3 class="card-title">ClassPal</h3>
                <div className="tagsDiv">
                  <span class="w3-tag">React</span>
                  <span class="w3-tag">JavaScript</span>
                  <span class="w3-tag">CSS</span>
                </div>
                <p class="card-text">
                  An AI teaching assistant web app. I coordinated with the owner
                  of the site to build a suitable front-end for them.
                </p>

                <a
                  href="https://github.com/AlexanderNorton/classpal-frontend"
                  class="btn classBtn btn-dark btn-sm"
                >
                  {" "}
                  <i
                    class="fa-brands fa-github"
                    style={{ color: "#ffffff;" }}
                  ></i>{" "}
                  Github
                </a>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card Card2">
              <div
                id="carouselExampleControls"
                class="carousel slide card-img-top"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://media.licdn.com/dms/image/sync/D4D27AQGob1QOnz2Jxg/articleshare-shrink_800/0/1691074219291?e=1691690400&v=beta&t=s7dxhOBq1Fy9bglXDFfitg5eQDrg87g4XSpkDheYRNg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://media.licdn.com/dms/image/sync/D4D27AQGRwdman62-Kg/articleshare-shrink_800/0/1691074219293?e=1691690400&v=beta&t=HQ6H_ExKqH25W7AD9rWfMwjifWSEoBEw4ub3gR3T-pY"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://media.licdn.com/dms/image/sync/D4D27AQFu5q8ZTT8FiA/articleshare-shrink_800/0/1691074219217?e=1691690400&v=beta&t=8kdsOet7Q9XiQAD_DYIrmjz5DfIBPYylJBSV0Ftdg5Y"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <div class="card-body">
                <h3 class="card-title">Team Taverns</h3>
                <div className="tagsDiv">
                  <span class="w3-tag">React</span>
                  <span class="w3-tag">Google Maps API</span>
                  <span class="w3-tag">JavaScript</span>
                  <span class="w3-tag">Spline</span>
                  <span class="w3-tag">CSS</span>
                  <span class="w3-tag">React Router</span>
                </div>

                <div className="TeamCard-Text1">
                  <p class="card-text1">
                    Bar Locator built using React and Google Maps API. Users
                    input their location and the club they support and it'll
                    place markers on the map of bars associated with their team.
                  </p>
                </div>

                <p class="card-text2">
                  Multi-page Bar Locator built using React and Google Maps API.
                  Markers placed based on user input.
                </p>

                <a
                  href="https://github.com/RJAttwell/Team-Taverns"
                  class="btn teamBtn btn-dark btn-sm"
                >
                  {" "}
                  <i
                    class="fa-brands fa-github"
                    style={{ color: "#ffffff;" }}
                  ></i>{" "}
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container cardContainer2">
        <div class="row">
          <div class="col-6">
            <div class="card Card3">
              <img
                class="card-img-top "
                src="https://i.gyazo.com/77b29d09a416c6ea6170d75ef1a65760.png"
                alt=""
              />

              <div class="card-body">
                <h3 class="card-title">Note Taking Web App</h3>

                <div className="tagsDiv">
                  <span class="w3-tag">React</span>
                  <span class="w3-tag">JavaScript</span>
                  <span class="w3-tag">CSS</span>
                  <span class="w3-tag">NPM</span>
                </div>

                <p class="card-text">
                  A web app built with React that allows you to create notes.
                  Also allows you to delete notes when they're not needed
                  anymore.
                </p>

                <a
                  href="https://github.com/RJAttwell/React/tree/main/Keeper%20App%20Challenge/src"
                  class="btn noteBtn btn-dark btn-sm"
                >
                  {" "}
                  <i
                    class="fa-brands fa-github"
                    style={{ color: "#ffffff;" }}
                  ></i>{" "}
                  Github
                </a>
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card Card4">
              <img
                class="card-img-top"
                src="https://i.gyazo.com/02ba89c192ab2735b1cdd0b9c2cf4774.png"
                alt=""
              />

              <div class="card-body">
                <h3 class="card-title">Blog Website</h3>

                <div className="tagsDiv">
                  <span class="w3-tag">NodeJS</span>
                  <span class="w3-tag">JavaScript</span>
                  <span class="w3-tag">MongoDB</span>
                  <span class="w3-tag">NPM</span>
                </div>

                <p class="card-text">
                  Multi-page blog website that allows you to post your thoughts.
                  Clicking read more brings you to each unique post's page.
                </p>

                <a
                  href="https://github.com/RJAttwell/Blog-Website-v2"
                  class="btn blogBtn btn-dark btn-sm"
                >
                  {" "}
                  <i
                    class="fa-brands fa-github"
                    style={{ color: "#ffffff;" }}
                  ></i>{" "}
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="FutureProjects">
        <h1 className="FutureHeader">Currently working on...</h1>

        <div>
          <div className="WorkingOn">
            <h1 className="FutureProject1">💪 Bulking 101</h1>
            <h1 className="FutureProject2">🎮 GameRank</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
