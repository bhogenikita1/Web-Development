import "../styles/contact.css";

function Contact() {
    return (
        <>
            <section id="contact" className="contact">
                <h2>CONTACT US</h2>
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" required />

                    <label>Email:</label>
                    <input type="email" name="email" required />

                    <label>Message:</label>
                    <textarea name="message" rows="5" required></textarea>

                    <button type="submit">SEND!</button>
                </form>
            </section>
        </>
    );
}

export default Contact;
