import Layout from '../components/Layout'

function Projects() {
  return (
    <Layout title="Abhin - Projects">
      <div className="margin-services">

        {/* Project 1 – #Trending */}
        <div className="col-md-7">
          <div className="first-s">
            <div className="square wow fadeInDown" data-wow-delay=".5s"></div>
          </div>
          <img src="/img/work1.jpg" alt="photo" className="photo-services" />
        </div>
        <div className="col-md-5">
          <a href="https://nsscucampus.github.io/magazine/">
            <h4 className="heading-services">#Trending</h4>
          </a>
          <p>
            The magazine #Trending, which amalgamates creativity and technology, gives voice to the
            conflicts of today and the hopes of tomorrow, is compiled and designed by the National
            Service Scheme Unit of GMHSS CU Campus. It comprises stories, poems, write-ups, reviews,
            etc penned by the students.
          </p>
        </div>

        {/* Project 2 – Malabo */}
        <div className="col-md-7">
          <div className="first-s">
            <div className="square wow fadeInDown" data-wow-delay=".5s"></div>
          </div>
          <img src="/img/work2.jpg" alt="photo" className="photo-services" />
        </div>
        <div className="col-md-5">
          <a href="">
            <h4 className="heading-services">Malabo</h4>
          </a>
          <p>
            We Four people named Mishal, Salih, Shannof, Abhin worked behind this project in the
            period of pandemic as a support for hotels &amp; peoples in our locality.
          </p>
        </div>

      </div>
    </Layout>
  )
}

export default Projects
