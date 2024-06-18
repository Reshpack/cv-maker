import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import downloadIcon from '../assets/download.svg';

const DownloadButton = () => {
  const downloadResume = () => {
    const input = document.getElementById('resume-page');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, pageHeight);
        pdf.save('resume.pdf');
      });
  };

  return (
    <button className="dl-btn" onClick={downloadResume}>
      <img src={downloadIcon} alt="" />
      Download
    </button>
  );
};

export default DownloadButton;