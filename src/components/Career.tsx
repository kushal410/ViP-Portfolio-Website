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
                <h4>Software QA Automation Engineer</h4>
                <h5>Hot Stone</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led automation efforts for web and mobile features using Selenium and Appium. Responsible for test case design, regression suites, API validation, and defect tracking to improve release quality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software QA Automation Engineer</h4>
                <h5>Binary Digits</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Implemented automated test frameworks, executed functional and integration tests, and collaborated with developers to triage issues. Focused on API testing and end-to-end automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software QA Automation Engineer</h4>
                <h5>Deerhold</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Performed manual and automated testing across web applications, logged and managed defects, and supported release validation and cross-platform compatibility checks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
