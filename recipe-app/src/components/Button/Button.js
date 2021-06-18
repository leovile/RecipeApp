import React from 'react';


const Button = ({ onClick, title }) => (
  <div>
    <button onClick={onClick}>{title}</button>
  </div>
)

export default Button;