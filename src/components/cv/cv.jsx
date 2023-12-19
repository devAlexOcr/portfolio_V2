

import './cv.css';


function Cv({dataClass}) {





    return (
        <div id='cv' className={`glass ${dataClass}`}>
            <div id='formation'>
                <h2>Formation</h2>
                <div id='openclassrooms'>
                    <h3>Openclassrooms</h3>
                    <p>RNCP 36076 - Niveau 5</p>
                    <p>Développeur intégrateur web</p>
                </div>
                <div id='bts'>
                    <h3>Lycée Pierre et Marie Curie - Versailles</h3>
                    <p>BTS - Analyses de biologie médicales</p>
                </div>
            </div>
            <div id='experience'>
                <h2>Expérience</h2>
                <div id='freelance'>
                    <h3>Développeur Web frontend</h3>
                    <p>Freelance / nov. 2023 - à ce jour</p>
                </div>
                <div id='dev_openclassrooms'>
                    <h3>Formation développeur web front et back end</h3>
                    <p>Openclassrooms / oct. 2022 - oct. 2023</p>
                    <p>Réalisation des différents projets professionnalisant.</p>
                </div>
                <div id='technicien'>
                    <h3>Technicien de laboratoire de biologie</h3>
                    <p> juil. 2012 - sept. 2022</p>
                </div>
            </div>
        </div>
    )
};

export default Cv;