// Description.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Description from './description.jsx';

// Suite de tests pour le composant Description
describe('Description Component', () => {

  // Test basique pour s'assurer que le composant se rend sans erreur
  test('renders without crashing', () => {
    const dataProjets = [
      {
        id: 1,
        name: 'Project 1',
        description: 'Description for Project 1',
        languages: ['JavaScript'],
        competence: ['React', 'Testing'],
      },
    ];
    const indexProjet = 1;

    render(<Description dataProjets={dataProjets} indexProjet={indexProjet} />);
  });

  // Test pour vérifier si le nom du projet et la description sont rendus correctement
  test('renders project name and description', () => {
    const dataProjets = [
      {
        id: 1,
        name: 'Project 1',
        description: 'Description for Project 1',
        languages: ['JavaScript'],
        competence: ['React', 'Testing'],
      },
    ];
    const indexProjet = 1;

    // Rend le composant et récupère les fonctions getByText pour effectuer des assertions
    const { getByText } = render(<Description dataProjets={dataProjets} indexProjet={indexProjet} />);

    // Assertions pour vérifier si les éléments attendus sont présents dans le rendu
    expect(getByText('Project 1')).toBeInTheDocument();
    expect(getByText('Description for Project 1')).toBeInTheDocument();
  });

  // Test pour vérifier si la liste de compétences est rendue correctement si elle est disponible
  test('renders competence list if available', () => {
    const dataProjets = [
      {
        id: 1,
        name: 'Project 1',
        description: 'Description for Project 1',
        languages: ['JavaScript'],
        competence: ['React', 'Testing'],
      },
    ];
    const indexProjet = 1;

    const { getByText } = render(<Description dataProjets={dataProjets} indexProjet={indexProjet} />);

    // Assertions pour vérifier si les éléments attendus de la liste de compétences sont présents
    expect(getByText('Compétences développées')).toBeInTheDocument();
    expect(getByText('React')).toBeInTheDocument();
    expect(getByText('Testing')).toBeInTheDocument();
  });

  // Test pour vérifier que la liste de compétences n'est pas rendue si elle n'est pas disponible
  test('does not render competence list if not available', () => {
    const dataProjets = [
      {
        id: 1,
        name: 'Project 1',
        description: 'Description for Project 1',
        languages: ['JavaScript'],
        competence: [], // Tableau de compétences vide
      },
    ];
    const indexProjet = 1;

    const { queryByText } = render(<Description dataProjets={dataProjets} indexProjet={indexProjet} />);

    // Assertion pour vérifier que la liste de compétences n'est pas présente dans le rendu
    expect(queryByText('Compétences développées')).toBeNull();
  });
});
