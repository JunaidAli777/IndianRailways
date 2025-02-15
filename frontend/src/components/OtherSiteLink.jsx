import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const OtherSiteLink = ({ linkText, to }) => {
  return (
    <div>
      <a 
        className='othersitelink'
        href={to} target="_blank" rel="noopener noreferrer">{linkText}
        <span><OpenInNewIcon fontSize='1rem' /></span>
      </a>

      <style>
        {`

          .othersitelink {
            display: inline-flex;;
            justify-content: center;
            align-items: center;
            border: 1px solid #0073E6;
            border-radius: 0.3125rem;
            color: #0073E6;
            padding: 0.25rem;
            text-decoration: none;                      
            }

          .othersitelink:hover {
            background-color: #0073E6; /* Blue background on hover */
            color: white; /* White text on hover */
          }

          .othersitelink:hover span svg {
            color: white;
          }

          .othersitelink span {
            margin-left: 0.15rem;
          }
            
        `}
      </style>
    </div>
  )
}

export default OtherSiteLink
