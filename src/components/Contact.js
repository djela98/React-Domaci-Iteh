import Navbar from './Navbar';

function Contact() {

    function ispisVrednosti(imePrezime, email, poruka) {
        alert("Unete vrednosti u formu: Ime i prezime - " + imePrezime + " Email - " + email + " Poruka - " + poruka);
    }

    return (
        <div className="contact">
            <Navbar />
        </div>
    );
}

export default Contact;