import Image from "../node.gif"

export default function Skills(){
    return(
        <section id="skillsSection">
            <img className="ReactLogo" src="https://i.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.webp" alt="React Logo" />
            <img className="JSLogo" src="https://i.giphy.com/media/XH9wwXfUXu91wAJwN5/giphy.webp" alt="JavaScript Logo" />
            <img className="CSSLogo" src="https://i.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.webp" alt="CSS Logo" />
            <img className="HTMLLogo" src="https://i.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.webp" alt="HTML Logo" />        
            <img className="NodeLogo"  src={Image} alt="NodeJS Logo"/>
            <img className="githubLogo" src="https://i.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.webp" alt="Github Logo" />
            <img className="gitLogo"    src="https://i.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.webp" alt="Git Logo" />
            <img className="BootstrapLogo" src="https://i.giphy.com/media/Sr8xDpMwVKOHUWDVRD/giphy.webp" alt="Bootstrap Logo" />
        </section>
    )
}