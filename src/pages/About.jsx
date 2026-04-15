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
            I am deeply passionate about computer science and full-stack development. Currently
            pursuing my studies in computer science, I thrive on the challenges and innovations that
            this field offers.
          </h4>

          <h4>
            <span className="text-about">Beyond academia,</span> I am also the proud founder of
            MadeWebs, a company dedicated to crafting unique and impactful web solutions. Through
            MadeWebs, I channel my creativity and technical skills into developing websites that not
            only meet but exceed expectations.
          </h4>

          <h4>
            <span className="text-about">My journey into the world of technology</span> began with a
            fascination for coding and problem-solving. This passion has driven me to continuously
            learn and grow, staying abreast of the latest advancements in web development and
            software engineering.
          </h4>

          <h4>
            <span className="text-about">
              Crafting Digital Excellence: Where Passion Meets Precision
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
              <i className="fa fa-instagram fa-1x icon1"></i> Instagram : abhin__C
            </a>
            <br /><br />
            <a href="https://www.facebook.com/Abhin.Google">
              <i className="fa fa-facebook fa-1x icon1"></i> Facebook : Abhin.C
            </a>
            <br /><br />
            <a href="https://www.linkedin.com/in/abhin-c/">
              <i className="fa fa-linkedin fa-1x icon1"></i> linkedin : abhin-C
            </a>
            <br /><br />
            <a href="https://github.com/abhinhere">
              <i className="fa fa-github fa-1x icon1"></i> Github : abhinhere
            </a>
            <br /><br />
            <a href="https://www.youtube.com/@abhin.c">
              <i className="fa fa-youtube fa-1x icon1"></i> Youtube : abhin.c
            </a>
            <br /><br />
            <a href="https://x.com/Abhin__c">
              <i className="fa fa-twitter fa-1x icon1"></i> X : abhinhere
            </a>
            <br />
          </center>
        </div>
      </div>
    </Layout>
  )
}

export default About
