import Layout from '../components/Layout'

function Contact() {
  return (
    <Layout title="Abhin - Contact">
      <div className="margin-contact">
        {/* Left – Contact form */}
        <div className="box-contact col-md-4 col-xs-offset-1">
          <h3 className="heading-inner">Get in touch</h3>
          <div className="hr"></div>

          <div id="contact-area">
            <form method="post" action="#">
              <label htmlFor="Name">Name:</label>
              <input type="text" name="Name" id="Name" />
              <label htmlFor="Message">Message:</label>
              <br />
              <textarea name="Message" rows="20" cols="20" id="Message"></textarea>
              <input
                type="submit"
                onClick={() => typeof sendToinsta === 'function' && sendToinsta()}
                name="submit"
                value="Submit"
                className="submit-button"
              />
            </form>
          </div>

          <h6>
            <strong>Address:</strong> Chelari, Kerala, 676317
            <span>
              <strong>Linkedin: </strong>
              <a href="https://www.linkedin.com/in/abhin-c/">abhin-c</a>
            </span>
            <span>
              <strong>instagram: </strong>
              <a href="https://www.instagram.com/abhin__c/">abhin__c</a>
            </span>
            <span>
              <strong>Email: </strong>
              <a href="mailto:abhinchelakkal@gmail.com"> abhinchelakkal@gmail.com</a>
            </span>
          </h6>
        </div>

        {/* Right – Illustration */}
        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
          <img src="/img/contact.png" alt="img" className="photo-contact" />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
