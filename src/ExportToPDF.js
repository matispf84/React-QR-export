import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import SlotCard from './SlotCard';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Define el componente ExportToPDF que recibe un array de slots como prop
export const ExportToPDF = ({ slots }) => {
  // Crea una referencia para el contenedor que contiene las tarjetas de tragamonedas
  const pdfContainerRef = useRef(null);

  // Define la función exportToPDF que exportará las tarjetas a un archivo PDF
  const exportToPDF = async () => {
    // Verifica si el contenedor existe
    if (pdfContainerRef.current) {
      // Convierte el contenedor a un objeto canvas usando html2canvas
      const canvas = await html2canvas(pdfContainerRef.current);
      // Obtiene la imagen en formato PNG a partir del objeto canvas
      const imgData = canvas.toDataURL('image/png');
      // Crea un nuevo objeto PDF usando jsPDF
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' });
      // Agrega la imagen al PDF
      pdf.addImage(imgData, 'PNG', 0, 0);
      // Guarda el PDF como un archivo
      pdf.save('slot_cards.pdf');
    }
  };

  return (
    <>
      <Button onClick={exportToPDF} variant="primary">
        Exportar a PDF
      </Button>
      <div
        ref={pdfContainerRef}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '210mm',
          minHeight: '297mm',
          backgroundColor: 'white',
          flexFlow: 'row wrap',
          alignContent: 'flex-start',
          padding: '10px',
        }}
      >
        {slots.map((slot) => (
          <SlotCard key={slot.id} slot={slot} />
        ))}
</div>

    </>
  );
};
