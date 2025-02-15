import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/pagesideheader.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EmailIcon from '@mui/icons-material/Email';
import PrintIcon from '@mui/icons-material/Print';

const PageSideHeader = () => {

const navigate = useNavigate();

  const handleDropdownChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  const handleBookmarkClick = () => {
    alert('To bookmark this page, press Ctrl + D (Windows) or Command + D (Mac).');  
  };

  const handleMailClick = () => {
    const currentUrl = window.location.href;
    const pageTitle = document.title;
    const subject = `Check out this page: ${pageTitle}`;
    const body = `I thought you might find this page interesting:\n${currentUrl}`;

    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handlePrintClick = () => {
    window.print();
  }


  return (
    <div className='pagesideheader'>
      <div onClick={handleBookmarkClick} style={{display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#0073E6', gap: '0.5rem' }}> <span><BookmarkIcon /></span> Bookmark</div>
      <div onClick={handleMailClick} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#0073E6', gap: '0.5rem' }}><span><EmailIcon /></span>Mail this page</div>
      <div onClick={handlePrintClick} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#0073E6', gap: '0.5rem' }}> <span><PrintIcon /></span> Print this page</div>
      <div style={{display: 'flex', flexDirection: 'column', fontWeight: 'bold'}}>
        <span>QUICK LINKS</span>

        <select onChange={handleDropdownChange} defaultValue="">
            <option value="" disabled>Select</option>
            <option value="/mgmtnfclty">Management & Faculty</option>
            <option value="/iriset">Reaching IRISET</option>
            <option value="/ipr">Immovable Property Returns</option>
            <option value="/pp">Portal Policies</option>
        </select>
      </div>
    </div>
  )
}

export default PageSideHeader
