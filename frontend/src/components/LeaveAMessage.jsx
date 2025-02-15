import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles/leaveamessage.css';

const LeaveAMessage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
          const response = await axios.post('http://localhost:3000/api/messages', {
              name,
              email,
              message,
          });
  
          console.log('Message sent successfully:', response.data);
          setName('');
          setEmail('');
          setMessage('');
      } catch (error) {
          console.error('Error sending message:', error.response?.data || error.message);
      }
  };
  
  return (
    <div className='leaveamessage'>
      <div className='leaveamessagesidebar'>
        <div className='leaveamessagesidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="leaveamessagesidebarbody">
          <div>
            <Link to='/contactus/disclaimer' >Disclaimer</Link>
          </div>

          <div>
            <Link to='/contactus/righttoinformation' >Right To Information</Link>
          </div>


          <div>
            <Link to='/contactus/nirpersonnel' >Non-IR Personnel</Link>
          </div>

          <div>
            <Link to='/contactus/privacypolicy' >Privacy Policy</Link>
          </div>

          <div>
            <Link to='/contactus/tandc' >Terms and Conditions</Link>
          </div>

          <div>
            <Link to='/contactus/otherrailwaysites' >Other Railway Sites</Link>
          </div>
        </div>
      </div>

      <div style={{fontFamily: 'arial'}} className="leaveamessagepage">

        <PageSideHeader />

                <h2 style={{display: 'block', margin: '1rem auto', width: 'fit-content', color: '#0073E6'}}>
                    Leave A Message!
                </h2>

                <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                    />
                    <TextField
                        label="Message..."
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        multiline
                        rows={4}
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Submit
                    </Button>
                </form>
                
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default LeaveAMessage
