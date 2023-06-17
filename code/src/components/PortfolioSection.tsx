import portfolioData from '../data/portfolioData';

function PortfolioSection() {
  const PortfolioContainer = () => {
    return (
      <>
        {portfolioData.map((item, index) => (
          <div key={index} className="project-container">
            <img src={item.image} alt={item.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <h2>Portfolio Section</h2>
      <div className='portfolio-container'>
      <PortfolioContainer />
      </div>
    </section>
  );
}

export default PortfolioSection;
