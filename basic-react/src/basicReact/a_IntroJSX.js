import React from 'react';

function formatName(user) {
    return user.firstName + ' ' + user.lastName
  }
  const user = {
    firstName: 'Talha',
    lastName: 'Noory'
  }

  export default formatName;
  
  // function getGreeting(user) {
  //   if (user) {
  //     return <h1>Hello, {formatName(user)}!/</h1>
  //   }
  //   return <h1>Hello, Stranger.</h1>
  // }
  
  // // to Specify Attributes with JSX
  // const element = <div tabIndex="0"></div>
  // // Using curly braces to embed JS expression in an Attribute
  // const element = <img src={user.avatarURL}></img>