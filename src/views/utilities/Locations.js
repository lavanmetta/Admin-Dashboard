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
import { useState, useEffect, useRef } from 'react';
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

const Locations = () => {

    const [locations, setLocations] = useState([]);


    const containerRef = useRef(null);
  
    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        container.addEventListener('wheel', (event) => {
          event.preventDefault();
          container.scrollBy({
            left: event.deltaY < 0 ? -30 : 30,
          });
        });
      }
      // cleanup function to remove the event listener on unmount
      return () => {
        if (container) {
          container.removeEventListener('wheel', (event) => {
            event.preventDefault();
            container.scrollBy({
              left: event.deltaY < 0 ? -30 : 30,
            });
          });
        }
      }
    }, []);
  
    useEffect(() =>  {
        axios.get('http://localhost:3001/auth/locations') 
        .then((response)  => {
            setLocations(response.data)
            
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

return (
    <MainCard title="Basic Shadow" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
    <h1>Locations</h1>
    <TableContainer component={Paper} ref={containerRef} id="container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor:'#EDE7F6' }} >
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >Phone_Number</TableCell>
            <TableCell >Description</TableCell>
            
            <TableCell >Longitude</TableCell>
            <TableCell >Latitude</TableCell>
            <TableCell >Radius_proximity</TableCell>
            <TableCell >Parent_location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { Object.values(locations).map(each => (
            <TableRow
              key={uuid()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  scope="row">
                {each.id}
              </TableCell>
              <TableCell >{each.name}</TableCell>
              <TableCell >{each.address}</TableCell>
              <TableCell >{each.phone_number}</TableCell>
              <TableCell >{each.description}</TableCell>
              
              <TableCell >{each.longitude}</TableCell>
              <TableCell >{each.latitude}</TableCell>
              <TableCell >{each.radius_proximity}</TableCell>
              <TableCell >{each.parent_location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </MainCard>
);
        }

export default Locations;