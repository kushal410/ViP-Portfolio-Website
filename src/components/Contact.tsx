import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:kushalniraula41@gmail.com" data-cursor="disable">
                kushalniraula41@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+9779860759186" data-cursor="disable">
                +977-9860759186
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.kushaln.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Website <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kushal-niraula-368594287/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://github.com/kushal410"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>
                <a href="https://github.com/kushal410" target="_blank" rel="noopener noreferrer" data-cursor="disable">Kushal Niraula</a>
              </span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
