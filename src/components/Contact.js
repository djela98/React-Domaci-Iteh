import ContactForm from './ContactForm';
import Navbar from './Navbar';

function Contact() {

    function ispisVrednosti(imePrezime, email, poruka) {
        alert("Unete vrednosti u formu: Ime i prezime - " + imePrezime + " Email - " + email + " Poruka - " + poruka);
    }

    return (
        <div className="contact">
            <Navbar />
            <ContactForm ispis={ispisVrednosti} />
        </div>
    );
}

export default Contact;