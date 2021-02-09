import React, { useState, useEffect } from 'react';
import TableBody from './TableBody';

const axios = require('axios');

function App() {
  // State to hold users
  const [users, setUsers] = useState([]);
  // State to manage loading
  const [loading, setLoading] = useState(false);

  // Ajax call to fetch the users from a dummy api: https://jsonplaceholder.typicode.com/users
  const fetchUsers = () => {
    setLoading(true);

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // handle success
      setLoading(false);
      if( response.status === 200 )
      {
        setUsers(response.data);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchUsers();

    // return () => {
    //   // If you want to do some kind of clean-up then do it here
    // }
  }, []);   // Here we have the dependency array as blank so this will run only once opn compoent mount and DOM is ready

  return (
    <div style={{ margin: '0 auto', width: '60%' }}>
      <div style={{ textAlign: 'center' }}><h4>Dummy API Integration - User's List</h4></div>
      <table style={{ width: '100%' }} border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
        {
          // If loading is true show the loader and then the actual list
          ( loading )
          ?
          <tr><td colSpan={4} style={{ textAlign: 'center' }}>Loading ...</td></tr>
          :
          <TableBody users={users} />
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
