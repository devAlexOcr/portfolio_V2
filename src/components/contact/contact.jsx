import { useRef } from 'react';

import './contact.css';


function Contact({dataClass}) {

	const nom = useRef();
	const prenom = useRef();
	const email = useRef();
	const message = useRef();

	function postMessage () {
		
		const contactText = {
			name : nom.current.value,
			firstname : prenom.current.value,
			email : email.current.value,
			message : message.current.value
		};

		fetch('https://api.alexandrepaucdetoc.fr/contact', 
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(contactText)
		}
		)
		.then (res => {
			document.getElementById('contactForm').reset();
			
			return res.json();	
		})
		.then (data => {
			alert(data.message);
		})
	}

    return (

        <div id='contact' className={`glass ${dataClass}`}>
            <h2>Des questions ? Un projet ? Contactez moi.</h2>
            <form id='contactForm'>
				<div id='form1'>
					<label htmlFor="nom"hidden >Nom</label>
					<input ref={nom} type="text" name="nom" id="nom" placeholder='Nom'/>
					<label htmlFor="prénom" hidden>Prénom</label>
					<input ref={prenom}type="text" name="prenom" id="prenom" placeholder='Prenom'/>
					<label htmlFor="email" hidden>Email</label>
					<input ref={email}type="email" name="email" id="email" placeholder='Email'/>
				</div>
				<div id='form2'>
					<label htmlFor="message" hidden>Message</label>
					<textarea ref={message} name="message" id="message" cols="30" rows="10" placeholder='Message...'></textarea>
				</div>
                <button type="button" onClick={()=>postMessage()}>Envoyer</button>
			</form>
        
        </div>

    )
}

export default Contact;