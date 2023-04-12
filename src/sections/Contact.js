import ContactIcon from "../components/ContactIcon";
import '../style/contact.css';

function Contact(props) {
    return (
        <div className="contact">
            <h1 className="heading">You can reach me here</h1>
            <div className="contact-icons">
                <ContactIcon tooltip="Mail" destination="mailto:someone@gzf.cool" img={require('../assets/social/mail.svg').default} />
                <ContactIcon tooltip="GitHub" destination="https://github.com/someone101112" img={require('../assets/social/github.svg').default} />
                <ContactIcon tooltip="Discord" destination="https://discord.gg/Hj9ekSwqrA" img={require('../assets/social/discord.svg').default} />
            </div>
        </div>
    );
}

export default Contact;
