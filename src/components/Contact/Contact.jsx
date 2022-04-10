import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact_content section">
        <h2 className="section_heading">Get In Touch</h2>
        <p>
          I'm always open to meeting new people and discovering new
          opportunities. Send me an email, let's connect!
        </p>
        <div className="contact_btn">
          <a href="mailto:nuelobeto@gmail.com">Say Hello</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
