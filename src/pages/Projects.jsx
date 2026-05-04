import Layout from '../components/Layout'

const projects = [
  {
    id: 1,
    title: 'College Enquiry IVR System with NLP',
    description: 'Designed flow for handling multiple types of student enquiries using Natural Language Processing.',
    tags: ['NLP', 'IVR', 'Python'],
    number: '01',
    preview: '/img/preview_ivr.png',
    link: 'https://github.com/abhinhere/IVRSystem',
  },
  {
    id: 2,
    title: 'Invoice Generator Web Application',
    description: 'Built a full-stack invoice generator using React and Node.js with real-time total calculation, PDF export, and a clean responsive UI.',
    tags: ['React', 'Node.js', 'PDF'],
    number: '02',
    preview: '/img/preview_invoice.png',
    link: 'https://github.com/abhinhere/invoice-generator',
  },
  {
    id: 3,
    title: 'Travel Guide App',
    description: 'Developed a web application to explore locations and services using external APIs. Built during a Hackathon.',
    tags: ['Hackathon', 'REST API', 'JavaScript'],
    number: '03',
    preview: '/img/preview_travel.png',
    link: 'https://github.com/abhinhere/',
  },
  {
    id: 4,
    title: 'Malabo',
    description: 'A collaborative project by Mishal, Salih, Shannof & Abhin — built during the pandemic as a support platform for hotels and people in our locality.',
    tags: ['Web App', 'Community'],
    number: '04',
    preview: '/img/preview_malabo.png',
    link: 'https://github.com/abhinhere/',
  },
]

function Projects() {
  return (
    <Layout title="Abhin - Projects">
      <div className="margin-resume">
        <h3 className="heading-inner">Projects</h3>
        <div className="hr"></div>

        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-preview">
                  <img
                    src={project.preview}
                    alt={`${project.title} preview`}
                    className="project-preview-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
