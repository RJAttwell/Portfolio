export default function Title() {
  return (
    <section id="Title">
      <div className="TitleText">
        <h1 className="h1Title">Richard Attwell.</h1>
        <h2 className="h2Title">Full-Stack Web Developer.</h2>
        <div>
          <a href="https://github.com/RJAttwell">
            <i
              class="fa-brands fa-github GithubTitleLogo"
              style={{ color: "#ffffff;" }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/richardattwell/">
            <i
              class="fa-brands fa-linkedin LinkedinTitleLogo"
              style={{ color: "#ffffff;" }}
            ></i>
          </a>
          <a href="https://richardattwellresume.tiiny.site/">
            <i
              class="fa-solid fa-file-pdf PDFTitleLogo"
              style={{ color: "#ffffff;" }}
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
}
