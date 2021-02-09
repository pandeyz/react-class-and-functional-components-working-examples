import React, { useState, useEffect } from 'react';
import TableBody from './TableBody';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      users: []
    }
  }

  fetchUsers = () => {
    this.setState({ loading: true });

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // handle success
      this.setState({ loading: false });
      if( response.status === 200 )
      {
        this.setState({ users: response.data });
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
      this.setState({ loading: false });
    });
  }

  componentDidMount() {
    // On component mount call the API and fetch the data
    this.fetchUsers();
  }

  render() {
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
            ( this.state.loading )
            ?
            <tr><td colSpan={4} style={{ textAlign: 'center' }}>Loading ...</td></tr>
            :
            <TableBody users={this.state.users} />
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
