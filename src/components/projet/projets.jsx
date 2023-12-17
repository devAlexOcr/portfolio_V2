import { useEffect, useState, useCallback } from 'react';

import Slider from './slider';
import Description from './description';


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

    const [indexProjet, setIndexProjet] = useState(1)

    const handleIndex = useCallback((index) => {
        setIndexProjet(index);
    }, [setIndexProjet])

    return (
        <div id='projets' className={`glass ${dataClass}`}>
            <Slider dataProjets={[dataProjets]} onUpdateIndexProjet={handleIndex} indexProjet={indexProjet}> </Slider>
            <Description dataProjets={[dataProjets]} indexProjet={indexProjet}> </Description>    
        </div>
    )
}

export default Projets;