import jsPDF from 'jspdf';
import { profile, aboutMe, skills, workExperience, projects, contactEmail, socials } from '../constants';

export const generateCV = () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const lineHeight = 7;
  let yPosition = margin;

  // Colors
  const primaryColor = { r: 6, g: 182, b: 212 }; // Cyan-500
  const textColor = { r: 51, g: 65, b: 85 }; // Slate-700
  const lightGray = { r: 148, g: 163, b: 184 }; // Slate-400

  // Helper function to add a new page if needed
  const checkPageBreak = (requiredSpace: number = 20) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to draw a section header
  const drawSectionHeader = (title: string) => {
    checkPageBreak(15);
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(title.toUpperCase(), margin, yPosition);
    yPosition += 2;
    
    // Draw underline
    pdf.setDrawColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setLineWidth(0.5);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += lineHeight;
  };

  // Header with name and title
  pdf.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b);
  pdf.rect(0, 0, pageWidth, 35, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text(profile.name, margin, 20);
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text(profile.title, margin, 28);
  
  yPosition = 45;

  // Contact Information
  pdf.setTextColor(textColor.r, textColor.g, textColor.b);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  
  const contactInfo = [
    `Email: ${contactEmail}`,
    ...socials.slice(0, 3).map(social => `${social.name}: ${social.url}`)
  ];
  
  contactInfo.forEach((info, index) => {
    pdf.text(info, margin, yPosition);
    yPosition += lineHeight - 1;
  });
  
  yPosition += 5;

  // Professional Summary
  drawSectionHeader('Professional Summary');
  pdf.setTextColor(textColor.r, textColor.g, textColor.b);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  
  const summaryLines = pdf.splitTextToSize(profile.bio, pageWidth - (margin * 2));
  summaryLines.forEach((line: string) => {
    checkPageBreak();
    pdf.text(line, margin, yPosition);
    yPosition += lineHeight - 1;
  });
  yPosition += 5;

  // About Me
  drawSectionHeader('About Me');
  pdf.setTextColor(textColor.r, textColor.g, textColor.b);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  
  const aboutLines = pdf.splitTextToSize(aboutMe.trim(), pageWidth - (margin * 2));
  aboutLines.forEach((line: string) => {
    checkPageBreak();
    pdf.text(line, margin, yPosition);
    yPosition += lineHeight - 1;
  });
  yPosition += 5;

  // Skills
  drawSectionHeader('Skills');
  pdf.setTextColor(textColor.r, textColor.g, textColor.b);
  
  Object.entries(skills).forEach(([category, skillList]) => {
    checkPageBreak(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.text(`${category}:`, margin, yPosition);
    pdf.setFont('helvetica', 'normal');
    pdf.text((skillList as string[]).join(', '), margin + 25, yPosition);
    yPosition += lineHeight;
  });
  yPosition += 5;

  // Work Experience
  drawSectionHeader('Work Experience');
  
  workExperience.forEach((job, index) => {
    checkPageBreak(25);
    
    // Job title and company
    pdf.setTextColor(textColor.r, textColor.g, textColor.b);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.text(job.role, margin, yPosition);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(lightGray.r, lightGray.g, lightGray.b);
    pdf.setFontSize(10);
    pdf.text(`${job.company} | ${job.duration}`, margin, yPosition + lineHeight - 2);
    yPosition += lineHeight + 2;
    
    // Job description
    pdf.setTextColor(textColor.r, textColor.g, textColor.b);
    pdf.setFontSize(10);
    const descLines = pdf.splitTextToSize(job.description, pageWidth - (margin * 2) - 5);
    descLines.forEach((line: string) => {
      checkPageBreak();
      pdf.text(line, margin + 5, yPosition);
      yPosition += lineHeight - 1;
    });
    
    if (index < workExperience.length - 1) {
      yPosition += 3;
    }
  });
  yPosition += 5;

  // Projects
  drawSectionHeader('Key Projects');
  
  projects.forEach((project, index) => {
    checkPageBreak(20);
    
    // Project title
    pdf.setTextColor(textColor.r, textColor.g, textColor.b);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.text(project.title, margin, yPosition);
    yPosition += lineHeight - 1;
    
    // Technologies
    pdf.setFont('helvetica', 'italic');
    pdf.setFontSize(9);
    pdf.setTextColor(lightGray.r, lightGray.g, lightGray.b);
    pdf.text(`Technologies: ${project.tech.join(', ')}`, margin + 5, yPosition);
    yPosition += lineHeight - 1;
    
    // Project description
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.setTextColor(textColor.r, textColor.g, textColor.b);
    const projDescLines = pdf.splitTextToSize(project.description, pageWidth - (margin * 2) - 5);
    projDescLines.forEach((line: string) => {
      checkPageBreak();
      pdf.text(line, margin + 5, yPosition);
      yPosition += lineHeight - 1;
    });
    
    if (index < projects.length - 1) {
      yPosition += 3;
    }
  });

  // Footer
  checkPageBreak(15);
  yPosition = pageHeight - 10;
  pdf.setFontSize(8);
  pdf.setTextColor(lightGray.r, lightGray.g, lightGray.b);
  pdf.text(`Generated on ${new Date().toLocaleDateString()}`, pageWidth / 2, yPosition, { align: 'center' });

  // Save the PDF
  const fileName = `${profile.name.replace(/\s+/g, '_')}_CV.pdf`;
  pdf.save(fileName);
};
