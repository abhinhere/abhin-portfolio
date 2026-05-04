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
              <p style={{ marginBottom: '5px' }}>
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

        {/* Experience */}
        <div className="container desc">
          <div className="row">
            <div className="col-lg-2 col-lg-offset-1">
              <h4>Experience</h4>
            </div>

            {/* MadeWebs */}
            <div className="col-lg-6">
              <p style={{ marginBottom: '5px' }}>
                <span className="e-heading">Founder & Web Developer</span>
                <br />
                MadeWebs
              </p>
              <ul className="more" style={{ paddingLeft: '15px', marginTop: '0', marginBottom: '15px' }}>
                <li>Founded a freelance web development business, delivering custom websites for 20+ clients</li>
                <li>Handled client communication, customization, and deployment end-to-end</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p><span className="date">Present</span></p>
            </div>

            {/* MadeProducts */}
            <div className="col-lg-6 col-lg-offset-3">
              <p style={{ marginBottom: '5px' }}>
                <span className="e-heading">Marketing Manager</span>
                <br />
                MadeProducts
              </p>
              <ul className="more" style={{ paddingLeft: '15px', marginTop: '0', marginBottom: '15px' }}>
                <li>Managed marketing for a paper bag manufacturing business</li>
                <li>Coordinated client interactions and supported order management</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p><span className="date">2024 - Present</span></p>
            </div>
          </div>
          <br />
          <div className="line-symbol"></div>
        </div>

        {/* Positions of Responsibility */}
        <div className="container desc">
          <div className="row">
            <div className="col-lg-2 col-lg-offset-1">
              <h4>Positions of Responsibility</h4>
            </div>

            {/* IEDC CEV */}
            <div className="col-lg-6">
              <p style={{ marginBottom: '5px' }}>
                <span className="e-heading">Student Lead</span>
                <br />
                IEDC CEV
              </p>
              <ul className="more" style={{ paddingLeft: '15px', marginTop: '0', marginBottom: '15px' }}>
                <li>Led student initiatives focused on innovation and entrepreneurship</li>
                <li>Organized 100+ events, fostering an innovation-driven community</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p><span className="date">2025 - 2027</span></p>
            </div>

            {/* IEEE LINK */}
            <div className="col-lg-6 col-lg-offset-3">
              <p style={{ marginBottom: '5px' }}>
                <span className="e-heading">Designer</span>
                <br />
                IEEE LINK
              </p>
              <ul className="more" style={{ paddingLeft: '15px', marginTop: '0', marginBottom: '15px' }}>
                <li>Designed promotional assets for events and outreach activities</li>
                <li>Maintained consistent visual identity across platforms</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p><span className="date">2025</span></p>
            </div>

            {/* IEEE SB CEV */}
            <div className="col-lg-6 col-lg-offset-3">
              <p style={{ marginBottom: '5px' }}>
                <span className="e-heading">Technical Coordinator</span>
                <br />
                IEEE SB CEV
              </p>
              <ul className="more" style={{ paddingLeft: '15px', marginTop: '0', marginBottom: '15px' }}>
                <li>Organized and supported technical workshops and events</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p><span className="date">2024</span></p>
            </div>

            {/* Quasso Liberum */}
            <div className="col-lg-6 col-lg-offset-3">
              <p style={{ marginBottom: '5px' }}>
                <span className="e-heading">Joint Convenor</span>
                <br />
                Quasso Liberum 12, College of Engineering Vadakara
              </p>
              <ul className="more" style={{ paddingLeft: '15px', marginTop: '0', marginBottom: '15px' }}>
                <li>Co-led organization of a large-scale college tech fest with multiple events and participants</li>
                <li>Coordinated teams across design, operations, and technical domains</li>
                <li>Managed event execution, planning, and inter-team communication</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p><span className="date">2026</span></p>
            </div>

            {/* Placement Cell */}
            <div className="col-lg-6 col-lg-offset-3">
              <p style={{ marginBottom: '5px' }}>
                <span className="e-heading">Poster Designer</span>
                <br />
                Placement Cell, College of Engineering Vadakara
              </p>
              <ul className="more" style={{ paddingLeft: '15px', marginTop: '0', marginBottom: '15px' }}>
                <li>Designed promotional creatives for placement drives and campus recruitment activities</li>
                <li>Maintained consistent branding and visual communication for official announcements</li>
                <li>Collaborated with placement team for timely content delivery</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p><span className="date">2024</span></p>
            </div>

            {/* IEDC CEV Webmaster */}
            <div className="col-lg-6 col-lg-offset-3">
              <p style={{ marginBottom: '5px' }}>
                <span className="e-heading">Webmaster</span>
                <br />
                IEDC CEV
              </p>
              <ul className="more" style={{ paddingLeft: '15px', marginTop: '0', marginBottom: '15px' }}>
                <li>Managed and maintained the official website, ensuring uptime and performance</li>
                <li>Updated event pages, announcements, and content regularly</li>
                <li>Collaborated with tech and media teams for smooth digital operations</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p><span className="date">2024</span></p>
            </div>

            {/* NSS GMHSS */}
            <div className="col-lg-6 col-lg-offset-3">
              <p style={{ marginBottom: '5px' }}>
                <span className="e-heading">Social Media Manager</span>
                <br />
                National Service Scheme, GMHSS CU Campus
              </p>
              <ul className="more" style={{ paddingLeft: '15px', marginTop: '0', marginBottom: '15px' }}>
                <li>Managed social media accounts and content strategy for outreach activities</li>
                <li>Designed and scheduled posts to increase engagement and visibility</li>
                <li>Promoted events, campaigns, and community initiatives</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p><span className="date">2021–2022</span></p>
            </div>
          </div>
          <br />
        </div>

      </div>
    </Layout>
  )
}

export default Resume
