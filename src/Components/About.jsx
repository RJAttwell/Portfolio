export default function About() {
  return (
    <section id="AboutSection">
      <h1 className="AboutHeaderText">
        About <span className="meText">Me</span>
      </h1>

      <div class="container aboutContainer">
        <div class="BioDiv row">
          <div className="BioTextDiv">
            <h4 className="bioText">
              I'm an Engineer who has re-trained as a Full Stack Developer,
              learning both Front End (HTML, CSS, Bootstrap, React) and Back End
              (Javascript, Node.js, MongoDB).
            </h4>

            <h4 className="bioText">
              I have worked all over the world and am now looking for new opportunities.
            </h4>
          </div>
        </div>

        <div>
          <img
            className="bioPic"
            src="https://i.gyazo.com/d926f506eea9f522ad85fd5693dfcc70.png"
            alt="my face"
          />
        </div>
      </div>

      {/* <div className="TestimonialDiv">
        <center><h3 className="TestHeader">Below are just two of my many testimonials</h3></center>

        <div className="container">
          <div>
            <h3 className="TestBigText">
              "Professional and able to work independently to build a sleek
              front-end for my web app.""
            </h3>

            <p className="TestSmallText">Alex Norton, owner of ClassPal.</p>
          </div>


          <div>
            <h3 className="TestBigText">"A handsome young man any company would be lucky to have."</h3>
            <p className="TestSmallText">My mum, owner of the house I live in.</p>
          </div>

        </div>
      </div> */}
    </section>
  );
}
