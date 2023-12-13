import { useState } from 'react';

import Navbar  from './components/menu';
import Aboutme from './components/aboutme';
import Projets from './components/projets';
import Contact from './components/contact';

function App() {

    const [section, setSection] = useState('');
 
    const handleUpdate = (action) => {
            setSection(action);        
    }

    return (
        <section id='Home'>
           <Navbar onUpdate={handleUpdate}></Navbar>
           {
            section === 'about' && <Aboutme dataClass={(section === 'about') ? 'open' : 'close'}></Aboutme>
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