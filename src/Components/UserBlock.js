import React, { Component } from 'react'
import Avatar from './Avatar';

const blockStyle = {
  display: 'flex',
  flexDirection: 'row'
}


const UserBlock = ({ color, firstName, lastName }) => {
  
  return (
    <div style={blockStyle}>
      <Avatar 
        color={color ? color : '#888'}
        initials={`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}
      />
      <h2>{firstName} {lastName}</h2>
    </div>
  );
}

export default UserBlock;