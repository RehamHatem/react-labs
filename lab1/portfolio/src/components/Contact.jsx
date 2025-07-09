import '../Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div>
        <h2>Contact Me</h2>
        <p><strong>Phone: </strong> 01119403318</p>
        <p><strong>Email: </strong> 
          <a href="mailto:rha772201@gmail.com"> rha772201&#64;gmail.com</a>
        </p>
        <p><strong>Location: </strong> Giza, Egypt</p>

        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/in/reham-hatem-9b2937236/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/RehamHatem" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Future form integration (React or backend): 
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" className="form-control" placeholder="Your Name" name="name" required />
          <input type="email" className="form-control" placeholder="Your Email" name="email" required />
          <textarea className="form-control" rows="5" placeholder="Your Message" name="message" required></textarea>
          <button type="submit" className="btn btn-custom">Send Message</button>
        </form>
        */}
      </div>
    </section>
  );
}

export default Contact;
