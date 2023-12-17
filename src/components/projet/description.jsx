import './description.css';



function Description({dataProjets, indexProjet}) {

    const projetAfficher = dataProjets[0][indexProjet-1];
    console.log(projetAfficher)

    if(!projetAfficher){
        return <></>;
    }

    return (
        
        <div id='description_projet'>
            <div id='name'>       
                <h2>{projetAfficher.name}</h2>
                    <p>{projetAfficher.description}</p>

            </div>
                {  
                    projetAfficher.competence.length > 0 ?
                        <div id='competences'>
                            <h2>Compétences développées</h2>
                                <ul>
                                    {        
                                        projetAfficher.competence.map( (competence, index) => (
                                            <li key={index}> {competence} </li>
                                        ))
                            
                                    }           
                                </ul>
                        </div>
                    :
                        <></>

                    }
             
        </div>
    )
};


export default Description;