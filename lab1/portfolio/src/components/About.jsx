import resumePDF from '../assets/images/reham hatem (1).pdf';
import '../About.css';
function About(){

     return (
    <section id="about">
      <div>
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with a background in Computer Science and Artificial Intelligence.
          My journey began with mobile app development using Flutter and Dart, and quickly expanded into
          web development and AI integration. I enjoy building intuitive, high-performance applications
          that solve real-world problems.
        </p>
        <p>
          Whether it's crafting responsive web interfaces, developing cross-platform mobile apps, or
          integrating AI for smarter user interactions, I’m always eager to explore new technologies and
          take on exciting challenges. I thrive in collaborative environments where innovation and
          learning go hand in hand.
        </p>
        <div className="btn">
          <a
            href={resumePDF}
            download
            className="btn-custom"
            title="Download CV"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );

}
export default About;