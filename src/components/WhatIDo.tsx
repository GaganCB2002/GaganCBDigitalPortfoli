import "./styles/WhatIDo.css";

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "React.js", "FastAPI", "Next.js"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Maven", "REST APIs", "JWT"],
  },
  {
    category: "Concepts",
    items: ["Object-Oriented Programming", "Microservices architecture", "SEO", "Agile"],
  },
  {
    category: "AI & Machine Learning",
    items: ["TF-IDF", "Cosine Similarity", "NLP", "Machine Learning concepts"],
  },
];

const WhatIDo = () => {
  return (
    <div className="whatIDO" style={{ height: "auto", minHeight: "100vh", padding: "100px 5%", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
      <h2 style={{ fontSize: "70px", fontWeight: "600", marginBottom: "40px", textAlign: "left", width: "100%", paddingLeft: "5%" }}>
        SK<span className="do-h2">ILLS</span>
      </h2>
      
      <div style={{ position: "relative", zIndex: 11, width: "100%", paddingLeft: "5%" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", width: "100%", maxWidth: "700px", marginLeft: 0 }}>
          {/* Skills Grid */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", width: "100%" }}>
            {skills.map((skillGroup, index) => (
              <div key={index} style={{
                 border: "1px dashed rgba(255,255,255,0.3)",
                 padding: "20px",
                 width: "calc(50% - 10px)",
                 minWidth: "220px",
                 boxSizing: "border-box",
                 backdropFilter: "blur(5px)",
                 background: "rgba(0,0,0,0.5)"
              }}>
                <h3 style={{ fontSize: "20px", marginBottom: "15px", fontWeight: "400", letterSpacing: "1px" }}>{skillGroup.category}</h3>
                <div className="what-content-flex" style={{ display: "flex", gap: "10px", flexWrap: "wrap", opacity: 1 }}>
                  {skillGroup.items.map((tag, i) => (
                    <div key={i} className="what-tags" style={{ fontSize: "12px" }}>{tag}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications Section */}
          <div style={{ width: "100%", marginTop: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "30px", backdropFilter: "blur(5px)", background: "rgba(0,0,0,0.5)", padding: "30px", border: "1px dashed rgba(255,255,255,0.3)" }}>
            <h2 style={{ fontSize: "26px", marginBottom: "20px", fontWeight: "500", letterSpacing: "1px" }}>Certifications</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "15px", fontSize: "15px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.8)" }}>▹ Deloitte Australia Technology Job Simulation</li>
              <li style={{ marginBottom: "15px", fontSize: "15px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.8)" }}>▹ Deloitte Cyber Security Job Simulation</li>
              <li style={{ marginBottom: "15px", fontSize: "15px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.8)" }}>▹ Tata GenAI Powered Data Analytics Job Simulation</li>
              <li style={{ marginBottom: "15px", fontSize: "15px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.8)" }}>▹ Software Engineering Job Simulation</li>
              <li style={{ marginBottom: "15px", fontSize: "15px", letterSpacing: "0.5px", color: "rgba(255,255,255,0.8)" }}>▹ Java Complete Java Core for Beginners</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
