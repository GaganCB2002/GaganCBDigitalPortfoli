import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Science</h4>
                <h5>Akshaya Institute of Technology</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed my Bachelor of Engineering with a focus on core software engineering principles, algorithms, and full-stack development. Active participant in coding challenges and technical symposiums.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Palle Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              (Feb 2025 - May 2025) Assisted in the development of web applications using Java and Spring Boot. Gained hands-on experience in building RESTful APIs, designing database schemas, and collaborating in an Agile environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Augmented Software Engineer</h4>
                <h5>Archelos Intelsense Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              (March 2026 - Present) Contributing to the development of scalable enterprise applications. Focused on integrating AI-powered features and optimizing backend microservices for enhanced system performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
