import { useState } from 'react'

function ContactForm(props) {

    const [vrednosti, setVrednosti] = useState({
        imePrezime: '',
        email: '',
        poruka: ''
    });


    return (
        <div className="contactform">
            <h2 className="mt-5">Kontakt forma</h2>
            <div className="mb-3 mt-5">
                <label>Ime i prezime: </label>
                <input type="text" className="form-control" value={vrednosti.imePrezime} onChange={e => setVrednosti({ ...vrednosti, imePrezime: e.target.value })} />
            </div>
            <div className="mb-3">
                <label htmlFor="form-label">Email: </label>
                <input type="email" className="form-control" value={vrednosti.email} onChange={e => setVrednosti({ ...vrednosti, email: e.target.value })} />
            </div>
            <div className="mb-3">
                <label htmlFor="form-label">Poruka: </label>
                <textarea className="form-control" value={vrednosti.poruka} onChange={e => setVrednosti({ ...vrednosti, poruka: e.target.value })} />
            </div>

            <button type="button" id="btn" onClick={() => props.ispis(vrednosti.imePrezime, vrednosti.email, vrednosti.poruka)} className="btn btn-success">Pošalji</button>
        </div>
    );
}

export default ContactForm;