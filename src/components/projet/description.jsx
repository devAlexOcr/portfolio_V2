import './description.css';



function Description({dataProjets, indexProjet}) {

    const projetAfficher = dataProjets[0][indexProjet-1];

    return (
        
        <div id='description_projet'>
            {   
                projetAfficher && projetAfficher.languages.length > 0 ?
                    <>       
                        <h2>{projetAfficher.name}</h2>
                        <p>{projetAfficher.description}</p>
                    </>  
                :
                    <></>
            }
        </div>
    )
};


export default Description;