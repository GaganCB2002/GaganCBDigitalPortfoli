import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="about-header" style={{ fontSize: "25px", textTransform: "uppercase", letterSpacing: "7px", fontWeight: 400, color: "var(--accentColor)", marginBottom: "20px" }}>About Me</h3>
        <p className="about-body" style={{ fontSize: "clamp(16px, 1.9vw, 33px)", fontWeight: 400, color: "rgba(255, 255, 255, 0.9)", lineHeight: "clamp(24px, 2.3vw, 36px)", letterSpacing: "1px", position: "relative", zIndex: 12 }}>
          Motivated and detail-oriented recent Computer Science graduate with a strong foundation in Java Full Stack Development. Passionate about building scalable web applications and integrating AI-powered systems. Eager to leverage my academic knowledge, internship experience, and current role to contribute to innovative projects and grow as a software engineer.
        </p>
      </div>
    </div>
  );
};

export default About;
