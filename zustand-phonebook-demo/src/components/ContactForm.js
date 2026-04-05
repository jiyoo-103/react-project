import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';

const ContactForm = () => {
  const [ name, setName ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const { addContact } = usePhoneBookStore();

  const handleAddContact = () => {
    const trimmedName = name.trim();
    const trimmedPhone = phoneNumber.trim();
    if (!trimmedName || !trimmedPhone) return;
    addContact(trimmedName, trimmedPhone);
    setName('');
    setPhoneNumber('');
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField 
        id="name" 
        label="이름" 
        variant="outlined" 
        value={name} onChange={(e) => setName(e.target.value)}/>
      <TextField 
        id="phone-number" 
        label="전화번호" 
        variant="outlined"
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
      <Button variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>

    </Box>
  );
};

export default ContactForm;