// src/components/MyComponent.js
import React from 'react';


const MyComponent = ({ message }:any) => {
  return (
    <div className="my-component">
      <p>{message}</p>
    </div>
  );
};

export default MyComponent;
