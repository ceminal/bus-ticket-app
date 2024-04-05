import React, { useState } from 'react';
import { Button, TextField, Box, List, ListItem, ListItemText } from '@mui/material';

import "./MyPassengerList.scss";

const PassengerApp = () => {
  const [mode, setMode] = useState('view');
  const [passengers, setPassengers] = useState([{ name: 'Furkan Yücel' }, { name: 'Pınar Yücel' }]);
  const [editablePassenger, setEditablePassenger] = useState(null);

  const handleEdit = (passenger) => {
    setEditablePassenger(passenger);
    setMode('edit');
  };

  const handleAdd = () => {
    setEditablePassenger({ name: '' });
    setMode('add');
  };

  const handleConfirm = () => {
    if (mode === 'edit') {
      setPassengers(passengers.map(p => p.name === editablePassenger.name ? editablePassenger : p));
    } else if (mode === 'add') {
      setPassengers([...passengers, editablePassenger]);
    }
    setMode('view');
  };

  if (mode === 'view') {
    return (
      <Box className="box">
        <h3>Kayıtlı Yolcular</h3>
        <List>
          {passengers.map((passenger, index) => (
            <ListItem key={index}>
              <ListItemText primary={passenger.name} />
              <Button onClick={() => handleEdit(passenger)}>İncele</Button>
            </ListItem>
          ))}
        </List>
        <Button onClick={handleAdd}>Yolcu Ekle</Button>
      </Box>
    );
  } else {
    return (
      <Box className="box">
        <h3>{mode === 'edit' ? 'Yolcunun Adı Soyadı' : 'Yolcu Ekle'}</h3>
        <TextField
          label="Yolcunun Adı ve Soyadı"
          value={editablePassenger.name}
          onChange={(e) => setEditablePassenger({ ...editablePassenger, name: e.target.value })}
        />
        <Button onClick={handleConfirm}>Onayla</Button>
      </Box>
    );
  }
};

export default PassengerApp;
