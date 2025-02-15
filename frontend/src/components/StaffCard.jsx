import React from 'react'

const StaffCard = ({ title, grade, img, name, number, email,}) => {
  return (
    <div 
        className='staffcard'
        style={{fontFamily: 'arial'}}>
      <div className='title'>
        <h2>{title}</h2>
      </div>
      <div className='imganddetails'>
        <div className='img'>
            <img src={img} alt="img" />
        </div>

        <div 
            className='details'
            style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '1rem'}}>
            <h3>{name} {grade ? `,${grade}` : ''}</h3>
            <span>Landline : {number}</span>
            <span>Email : {email}</span>
        </div>
      </div>

      <style>
        {`
            .imganddetails {
                    display: flex;
                    justify-content: left;
                    align-items: flex-start;
                    gap: 3rem
                }

            @media(max-width: 540px) {
                .staffcard {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .imganddetails {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 0;
                }
                
                .img {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        `}
      </style>
    </div>
  )
}

export default StaffCard
