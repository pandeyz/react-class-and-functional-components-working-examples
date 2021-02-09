import React from 'react';

class TableBody extends React.Component {
  
  render(props) {
    const {users} = props;
    return (
      <>
        {
          ( users )
          ?
          users.map((user) => 
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          )
          :
          null
        }
      </>
    );
  }
}

export default TableBody;
