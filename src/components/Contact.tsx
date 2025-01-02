const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">Contact Form</h1>
      <div className="contact-container">
        {/* Chat Info */}
        <div className="chat-info">
          <h3 className="chat-title">{`Let's Chat`}</h3>
          <p className="chat-description">
            {`I’m excited to hear your thoughts and ideas. Whether you have
            questions or just want to share ideas, drop me a message!`}
          </p>
        </div>

        {/* Contact Form */}
        <form method="post" className="contact-form">
          <label htmlFor="name" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Full Name"
            required
            className="form-input"
          />

          <label htmlFor="email" className="form-label">
            Email ID:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            required
            className="form-input"
          />

          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Write your message..."
            required
            className="form-textarea"
          ></textarea>

          <button type="submit" className="form-button">
            Send Message
          </button>
          <p id="msg-sent" className="form-success-msg">
            Message sent successfully!
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
