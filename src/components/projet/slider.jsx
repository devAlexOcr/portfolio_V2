import { useState, useEffect, useCallback } from 'react';

import './slider.css';



function Slider({dataProjets, onUpdateIndexProjet, indexProjet}) {

    const projects = dataProjets[0];
    const covers = projects.map(project => project.cover);

    const projetAfficher = dataProjets[0][indexProjet-1];
    console.log(projetAfficher)
    
    const [index, setIndex] = useState(0);
    useEffect(() => {onUpdateIndexProjet(index + 1)}, [index, onUpdateIndexProjet]); 


    const nextSlide = useCallback(() => {
        setIndex(index + 1)
        if(index === covers.length - 1){
            setIndex(0)
        }
    },[index, covers.length]);

    const previousSlide= () => {
        setIndex (index - 1)
        if(index === 0) {
            setIndex(covers.length - 1)
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide()
        }, 40000)
        return () => clearInterval(interval)
    },[nextSlide]);


    return (
        <div id='slider' >
            <div 
                className='slideshow'
                style={{backgroundImage : `url(${covers[index]})`}}
            >
                <p>{index+1} / {covers.length}</p>
            </div>
            <div id='languages_projet'>
                <img 
                        className={(covers.length>1)?'btn-left' : "none"}
                        src='./assets/images/chevronLeft.png'
                        alt='button-left'
                        onClick={previousSlide}
                    />
                
                {
                    projetAfficher && projetAfficher.languages.length > 0 ?
                        projetAfficher.languages.map( techno => (
                            <img key={techno} className='logo_techno' src={techno} alt={techno} />
                        ))
                    :
                    <></>
                }
                <img 
                        className={(covers.length>1)?'btn-right' : "none"}
                        src='./assets/images/chevronRight.png'
                        alt='button-right'
                        onClick={nextSlide}
                    />
            </div>
        </div>
    )
}


export default Slider;