import { useState } from 'react';

import Menu  from './components/menu';
import Aboutme from './components/aboutme/aboutme';
import Cv from './components/cv/cv';
import Projets from './components/projet/projets';
import Contact from './components/contact/contact';

function App() {

    const [section, setSection] = useState('');
 
    const handleUpdate = (action) => {
            setSection(action);        
    }

    return (
        <section id='Home'>

           <Menu onUpdate={handleUpdate}></Menu>
           {
            section === 'about' && <Aboutme dataClass={(section === 'about') ? 'open' : 'close'}></Aboutme>
           }
           {
            section === 'cv' && <Cv dataClass={(section === 'cv') ? 'open' : 'close'}></Cv>
           }
           {
            section === 'projet' && <Projets dataClass={(section === 'projet') ? 'open' : 'close'}></Projets>
           }
           {
            section === 'contact' && <Contact dataClass={(section === 'contact') ? 'open' : 'close'}></Contact>
           }
           
        </section>
    )
}

export default App;