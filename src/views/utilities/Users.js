import PropTypes from 'prop-types';
import * as React from 'react';
// material-ui
import { Box, Card } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';


// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => (
    <Card sx={{ mb: 3, boxShadow: shadow }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 4.5,
                bgcolor: 'primary.light',
                color: 'grey.800'
            }}
        >
            <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
        </Box>
    </Card>
);

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};


  
 

// ============================|| UTILITIES SHADOW ||============================ //

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>  {
      axios.get('http://localhost:3001/auth/userinfo') 
      .then((response)  => {
          setUsers(response.data)
          
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 

return (
    <MainCard title="Basic Shadow" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
    <h1>Users</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor:'#EDE7F6' }}  >
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >phone Number</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { Object.values(users).map(user => (
            <TableRow
                key={uuid()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.phonenumber}</TableCell>
                <TableCell>{user.email}</TableCell>
            </TableRow>
        ))}



        </TableBody>
      </Table>
    </TableContainer>
    </MainCard>
   );
}

export default Users;