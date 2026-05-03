import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout title="Abhin.C">
      {/* Main banner image and hero text */}
      <div className="col-md-12 wow fadeIn" data-wow-delay="0.1s">
        <img src="/img/main-banner.webp" alt="Abhin.C" className="resp main-image" />
        <h1>Hey there</h1>
        <div className="hr"></div>
        <h2>i&#39;m a passionate full stack developer;</h2>
        <div className="text-center">
          <Link to="/projects" className="home-btn btn">View Projects</Link>
        </div>
      </div>

      {/* Left column – bio */}
      <div className="box-home col-md-4 col-xs-offset-1">
        <h3>
          <span className="text-left">
            I’m Abhin, an aspiring full-stack developer pursuing a B.Tech in Computer Science, with hands-on experience delivering client websites and growing into full-stack development.
            Alongside my technical work, I’m an IEEE LINK (2025) team member and IEDC CEV student lead, actively involved in volunteering initiatives.
            {' '}
            <Link to="/resume">
              read more <i className="fa fa-angle-right"></i>
            </Link>
          </span>
        </h3>
      </div>

      {/* Right – decorative square + photo */}
      <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="first">
          <div className="square wow fadeInDown" data-wow-delay=".5s"></div>
        </div>
        <img src="/img/photo.jpg" alt="img" className="photo-home" />
      </div>
    </Layout>
  )
}

export default Home
