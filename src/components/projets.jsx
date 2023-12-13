import { useEffect, useState } from 'react';

import './projets.css';

function Projets({dataClass}) {

    const [dataProjets, setDataProjets] = useState([])

    useEffect(() => {
        fetch('datas/projets.json',
            {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            setDataProjets(data);
        })
    }, [setDataProjets])

    
    return (
        <div id='projets' className={`glass ${dataClass}`}>

        </div>
    )
}

export default Projets;