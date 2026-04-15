import Layout from '../components/Layout'

function Resume() {
  return (
    <Layout title="Abhin - Resume">
      <div className="margin-resume wow fadeIn" data-wow-delay="0.1s">
        <h3 className="heading-inner">Resume</h3>
        <div className="hr"></div>

        {/* Education */}
        <div className="container desc">
          <div className="row">
            <div className="col-lg-2 col-lg-offset-1">
              <h4>Education</h4>
            </div>
            <div className="col-lg-6">
              <p>
                <span className="e-heading">Computer Science And Engineering</span>
                <br />
                College of Engineering Vadakara
                <br />
                4 Years Course
              </p>
            </div>
            <div className="col-lg-3">
              <p>
                <span className="date">ON GOING</span>
                <br />
              </p>
            </div>
          </div>
          <br />
          <div className="line-symbol"></div>
        </div>

        {/* Work Experience */}
        <div className="container desc">
          <div className="row">
            <div className="col-lg-2 col-lg-offset-1">
              <h4>Work</h4>
            </div>

            {/* Media Manager */}
            <div className="col-lg-6">
              <p>
                <span className="e-heading">Media Manager</span>
                <br />
                NSS GMHSS CU Campus
                <br />
              </p>
              <p>
                <span className="more">
                  I contributed to the National Service Scheme as a dedicated volunteer, leveraging
                  my skills to create their website and adeptly manage their social media presence.
                </span>
              </p>
            </div>
            <div className="col-lg-3">
              <p><span className="date">Jan 2021 - Aug 2022</span></p>
            </div>

            {/* Karate Instructor */}
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <span className="e-heading">Karate Instructor</span>
                <br />
                Okinawa shorin ryu karate do
                <br />
              </p>
              <p>
                <span className="more">
                  I have enriched my expertise in Okinawa Shorin Ryu Karate-Do through training and
                  teaching under the guidance of masters Prasanakumar and Lithesh, embodying both
                  traditional principles and modern teaching methods.
                </span>
              </p>
            </div>
            <div className="col-lg-3">
              <p><span className="date">March 2018</span></p>
            </div>

            {/* Manager – MadeFit */}
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <span className="e-heading">Manager</span>
                <br />
                MadeFit Gents
                <br />
              </p>
              <p>
                <span className="more">
                  At Madefit Gents Shop, I wore multiple hats as a salesperson, purchaser, and
                  digital marketer, ensuring a seamless customer experience and effective brand
                  promotion.
                </span>
              </p>
            </div>
            <div className="col-lg-3">
              <p><span className="date">AUG 2018</span></p>
            </div>

            {/* Marketing Manager */}
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <span className="e-heading">Marketing Manager</span>
                <br />
                Made Products
                <br />
              </p>
              <p>
                <span className="more">
                  At Made Products, I specialized in both digital and offline marketing strategies,
                  effectively promoting our paper bag manufacturing capabilities to diverse markets
                  and clients.
                </span>
              </p>
            </div>
            <div className="col-lg-3">
              <p><span className="date">FEB 2020</span></p>
            </div>

            {/* Poster Designer */}
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <span className="e-heading">Poster Designer</span>
                <br />
                Training and placement cell, CEV
                <br />
              </p>
              <p>
                <span className="more">
                  At the Training and Placement Cell of College of Engineering Vadakara, I utilized
                  my design expertise to craft compelling posters that communicated career prospects
                  and events with clarity and visual appeal.
                </span>
              </p>
            </div>
            <div className="col-lg-3">
              <p><span className="date">JAN 2024</span></p>
            </div>

            {/* Technical Coordinator - IEEE */}
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <span className="e-heading">Technical Coordinator</span>
                <br />
                IEEE SB CEV
                <br />
              </p>
              <p>
                <span className="more">
                  I&#39;ve contributed to IEEE SB CEV as a dedicated volunteer and technical
                  coordinator, leveraging my skills to support and advance technological initiatives
                  within the organization.
                </span>
              </p>
            </div>
            <div className="col-lg-3">
              <p><span className="date">MAY 2024</span></p>
            </div>

            {/* Web Designer – Made Webs */}
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <span className="e-heading">Web Designer</span>
                <br />
                Made Webs
                <br />
              </p>
              <p>
                <span className="more">
                  At Madewebs, my role as a web designer allowed me to create bespoke, user-friendly
                  websites tailored to meet clients&#39; specific needs and preferences, ensuring a
                  seamless online presence for their businesses.
                </span>
              </p>
            </div>
            <div className="col-lg-3">
              <p><span className="date">MARCH 2022</span></p>
            </div>

            {/* Designer – IEEE LINK */}
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <span className="e-heading">Designer</span>
                <br />
                IEEE lINK
                <br />
              </p>
              <p><span className="more"></span></p>
            </div>
            <div className="col-lg-3">
              <p><span className="date">JAN 2025</span></p>
            </div>

            {/* Student Lead – IEDC */}
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <span className="e-heading">Student Lead</span>
                <br />
                IEDC CEV
                <br />
              </p>
              <p><span className="more"></span></p>
            </div>
            <div className="col-lg-3">
              <p><span className="date">APRIL 2025</span></p>
            </div>

          </div>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default Resume
