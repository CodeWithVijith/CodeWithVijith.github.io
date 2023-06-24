import portfolioData from '../data/portfolioData'

const Portfolio = () => {
  return (
    <section id="portfolio">
        {portfolioData.map((item, index) => (
          <div key={index} className="project-container">
            <img src={item.image} alt={item.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.description}</p>
            </div>
          </div>
        ))}
    </section>
  )
}

export default Portfolio