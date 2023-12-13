import React from 'react';

import './menu.css';


function Navbar ({onUpdate}) {

        const clickUpdate =(action) => {
            onUpdate(action);    
        }



    return (
        <div id='menu' className='glass'>
            <button onClick={()=>clickUpdate('about')} className='btn_menu'>
                 <i className="fa-solid fa-id-card"></i> </button>
            <button onClick={()=>clickUpdate('cv')} className='btn_menu'> 
                <i className="fa-solid fa-diagram-project"></i>  </button>
            <button onClick={()=>clickUpdate('projet')} className='btn_menu'>   
                <i className="fa-solid fa-code"></i> </button>
            <button onClick={()=>clickUpdate('contact')} className='btn_menu'>  
                <i className="fa-regular fa-envelope"></i> </button>
        </div>
    );
};



export default Navbar;
