import '../Home.css';
import bg from  '../assets/images/bg.jpg';
import profileImg from '../assets/images/img.jpg';

function Home(){
    return (
    <section id="home" style={{ backgroundImage: `url(${bg})` }}>
      <div>
        <img
          src={profileImg}
          alt="Reham Hatem Profile"
          loading="eager"
        />
        <h1>Reham Hatem</h1>
        <h4>Junior Software Developer | Mobile & Web | AI Enthusiast</h4>
        <p>
          Hi, I'm a Junior Flutter, Web, and AI Developer. I build mobile and web apps and love using AI to make them smarter. Welcome to my portfolio!
        </p>

        {/* Optional download button */}
        {/* <a href="/RehamHatemCV.pdf" download className="btn btn-custom" title="Download CV">Download CV</a> */}
      </div>
    </section>
  );
}
export default Home;