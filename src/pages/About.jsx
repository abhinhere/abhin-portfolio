import Layout from '../components/Layout'

function About() {
  return (
    <Layout title="Abhin - About">
      {/* First section – About text + photo */}
      <div className="margin-about">
        <div className="box-about col-md-4 col-xs-offset-1">
          <h3 className="heading-inner">About</h3>
          <div className="hr"></div>

          <h4>
            <span className="text-about">Welcome to my corner of the web!</span>
            <br />
            I’m Abhin, an aspiring full-stack developer currently pursuing a B.Tech in Computer Science. I have hands-on experience building and delivering websites for clients and I’m now focused on expanding into full-stack development by building real, scalable applications.
          </h4>

          <h4>
            <span className="text-about">BEYOND ACADEMICS,</span> I’ve worked on freelance web projects, delivering multiple websites based on client requirements. Alongside my technical work, I’m actively involved in student communities—serving as an IEEE LINK team member (2025) and student lead at IEDC CEV, with continued involvement in volunteering initiatives.
          </h4>

          <h4>
            <span className="text-about">MY FOCUS</span> is on improving my development skills through practical work, understanding how real-world systems function, and building applications that are useful, reliable, and user-focused.
          </h4>

          <h4>
            <span className="text-about">
              From client websites to full-stack systems—learning by building.
            </span>
          </h4>
        </div>

        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
          <img src="/img/about1.png" alt="" className="photo-about" />
        </div>
      </div>

      <div className="col-md-12"></div>

      {/* Second section – Social profiles + photo */}
      <div className="margin-about">
        <div className="col-md-6 wow fadeIn col-md-offset-1" data-wow-delay="0.1s">
          <img src="/img/about2.png" alt="" className="photo-about" />
        </div>

        <div className="box-about col-md-4">
          <h3 className="heading-inner">My profiles</h3>
          <div className="hr"></div>
          <center>
            <a href="https://www.instagram.com/abhin__c/">
              <i className="fa fa-instagram fa-1x icon1"></i> : abhin__c
            </a>
            <br /><br />
            <a href="https://www.linkedin.com/in/abhin-c/">
              <i className="fa fa-linkedin fa-1x icon1"></i> : abhin-c
            </a>
            <br /><br />
            <a href="https://github.com/abhinhere">
              <i className="fa fa-github fa-1x icon1"></i> : abhinhere
            </a>
            <br /><br />
            <a href="https://x.com/Abhin__c">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon1" style={{width: '1em', height: '1em', verticalAlign: '-0.125em', fill: 'currentColor'}}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg> : abhinhere
            </a>
            <br /><br />
          </center>
        </div>
      </div>
    </Layout>
  )
}

export default About
