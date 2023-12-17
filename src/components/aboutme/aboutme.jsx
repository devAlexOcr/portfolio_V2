import React from 'react';

import './aboutme.css';


function Aboutme ({dataClass}) {


    return (
        <div id='about_me' className={`glass ${dataClass}`}>
            <div id='portrait'> <img src='./assets/images/profil.jpg' alt='portrait de Alexandre'></img> </div>
            <div id='presentation'>
                <p>
                    Après une carrière de 10 ans dans le domaine des laboratoires d'analyses de biologie médicale qui m'a permis d'acquérir de nombreuses soft skills telles que l'esprit d'équipe, l'autonomie, la réactivité, j'ai décidé d'évoluer vers le métier de développeur web.<br />
                </p>
                <p>
                    En effet ce domaine que j'observe depuis de nombreuses années sur l'aspect technique et nouvelles technologies, a toujours suscité en moi un réel intérêt.<br />
                </p>
                <p>
                    D'un naturel curieux, j'ai décidé de me former au sein d'Openclassrooms, pour relever un nouveau challenge professionnel. En effet, l'acquisition de nouvelles compétences ainsi que les nombreux défis techniques rencontrés lors de la réalisation des projets professionnalisants ont été pour moi de véritables stimulants.
                </p>
            </div>
            <div id='reseaux'>
                <a href="https://fr.linkedin.com/in/alexandre-pauc-detoc-b94150238"  target = "_blank" rel="noreferrer">
                    <img src='./assets/images/logos/linkedin_logo.png' alt='logo LinkedIn'></img>
                </a>
                <a href="https://github.com/devAlexOcr" target = "_blank" rel="noreferrer">
                    <img src='./assets/images/logos/github_blanc_logo.png' alt='logo GitHub'></img>
                </a>
            </div>
            <div id='languages'>
                <img src='./assets/images/logos/React_logo.png' alt='logo ReactJs'></img>
                <img src='./assets/images/logos/sass_logo.png' alt='logo Sass'></img>
                <img src='./assets/images/logos/node_logo.png' alt='logo NodeJS'></img>
                <img src='./assets/images/logos/php_logo.png' alt='logo Php'></img>
                <img src='./assets/images/logos/mysql_logo.png' alt='logo MySQL'></img>
            </div>
        </div>
    );
};

export default Aboutme;