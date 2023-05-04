import React from 'react';
import { Container } from 'react-bootstrap';
import { ExportToPDF } from './ExportToPDF';

const App = () => {
  const slots = [
    {
      id: '1',
      marca: 'IGT',
      modelo: 'S3000',
      numeroDeSerie: '12345',
    },
    {
      id: '2',
      marca: 'Bally',
      modelo: 'Alpha Pro 2',
      numeroDeSerie: '67890',
    },
    {
      id: '3',
      marca: 'Aristocrat',
      modelo: 'Viridian WS',
      numeroDeSerie: '24680',
    },
    {
      id: '4',
      marca: 'Novomatic',
      modelo: 'Gaminator',
      numeroDeSerie: '13579',
    },
    {
      id: '5',
      marca: 'Konami',
      modelo: 'KX 43',
      numeroDeSerie: '54321',
    },
    {
      id: '6',
      marca: 'WMS',
      modelo: 'Bluebird 2',
      numeroDeSerie: '98765',
    },
    {
      id: '7',
      marca: 'Ainsworth',
      modelo: 'A560',
      numeroDeSerie: '86420',
    },
    {
      id: '8',
      marca: 'Merkur',
      modelo: 'Evostar',
      numeroDeSerie: '15948',
    },
    {
      id: '9',
      marca: 'EGT',
      modelo: 'Premier P-42V',
      numeroDeSerie: '75395',
    },
    {
      id: '10',
      marca: 'Spielo',
      modelo: 'Oxygen',
      numeroDeSerie: '95125',
    },
  ];


    return (
      <Container>
        <h1>Exportar tarjetas de tragamonedas a PDF</h1>
        <ExportToPDF slots={slots} />
      </Container>
    );

};

export default App;