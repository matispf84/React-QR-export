import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import SlotCard from './SlotCard';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const ExportToPDF = ({ slots }) => {
  const pdfContainerRef = useRef(null);

  const exportToPDF = async () => {
    if (pdfContainerRef.current) {
      const canvas = await html2canvas(pdfContainerRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' });
      pdf.addImage(imgData, 'PNG', 0, 0);
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
