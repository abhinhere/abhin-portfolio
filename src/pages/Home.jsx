import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout title="Abhin.C">
      {/* Main banner image and hero text */}
      <div className="col-md-12 wow fadeIn" data-wow-delay="0.1s">
        <img src="/img/main-banner.png" alt="img" className="resp main-image" />
        <h1>Hey there</h1>
        <div className="hr"></div>
        <h2>i&#39;m a passionate full stack developer;</h2>
        <div className="text-center">
          <Link to="/gallery" className="home-btn btn">My Gallery</Link>
        </div>
      </div>

      {/* Left column – bio */}
      <div className="box-home col-md-4 col-xs-offset-1">
        <h3>
          <span className="text-left">
            My name is Abhin and I am a passionate full-stack developer. With a keen interest in both
            front-end and back-end technologies, I enjoy crafting robust and user-friendly web
            applications. I am adept at turning ideas into reality through clean and efficient code,
            constantly striving to learn and apply new technologies to enhance my skills.{' '}
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
