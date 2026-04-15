import { useEffect } from 'react'
import Layout from '../components/Layout'

const photos = [
  { src: '/img/image1.jpg', title: 'PHOTO1', caption: 'Be Cringe.' },
  { src: '/img/image2.jpg', title: 'PHOTO2', caption: 'Be Free.' },
  { src: '/img/image3.jpg', title: 'PHOTO3', caption: 'Be Happy.' },
  { src: '/img/image4.jpg', title: 'QL XI',  caption: 'QuassoLiberum11 │ Media Team' },
  { src: '/img/image5.jpg', title: 'QL XI',  caption: 'QuassoLiberum11 │ Publicity Team' },
  { src: '/img/image6.jpg', title: 'QL XI',  caption: 'CSE Department' },
  { src: '/img/image7.jpg', title: 'NSS',    caption: 'NSS GMHSS CU CAMPUS 2020-2022 BATCH' },
  { src: '/img/image8.jpg', title: 'NSS MEDIA TEAM', caption: 'Website, socialmedia, documentation team of nss gmhss cu campus.' },
  { src: '/img/image9.jpg', title: 'HSS',    caption: 'Gmhss cu campus, higher secondary school.' },
]

function Gallery() {
  // Initialize touchTouch lightbox after component mounts
  useEffect(() => {
    if (window.$ && window.$.fn.touchTouch) {
      window.$('.thumbs a').touchTouch()
    }
  }, [])

  return (
    <Layout title="Abhin - Gallery">
      <div className="margin-collection wow fadeIn" data-wow-delay="0.1s">
        <div className="col-md-10 col-xs-offset-1">
          <h3 className="heading-inner">Gallery</h3>
          <div className="hr"></div>
          <div className="heading-c">
            I have a keen interest in web development, technology exploration, and networking.
            I am someone who enjoys staying updated with the latest trends in the tech world
            and diving into the intricacies of how things work.
          </div>
        </div>

        <div className="container">
          {/* Social links */}
          <ul className="portfolio-filter text-center">
            <a className="btn btn-default" href="https://www.instagram.com/abhin__c/">
              <li>Instagram</li>
            </a>
            <a className="btn btn-default" href="https://www.linkedin.com/in/abhin-c/">
              <li>linkedin</li>
            </a>
          </ul>

          {/* Photo grid */}
          <div className="row">
            <div className="portfolio-items grid">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="portfolio-item col-xs-12 col-sm-12 col-md-4 thumbs"
                >
                  <figure className="effect-moses wow fadeIn" data-wow-delay="0.1s">
                    <a href={photo.src}>
                      <img src={photo.src} alt={photo.title} />
                      <figcaption>
                        <h2>{photo.title}</h2>
                        <p>{photo.caption}</p>
                      </figcaption>
                    </a>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery
