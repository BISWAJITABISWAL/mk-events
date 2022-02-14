import React from 'react';

function Button({onpress , className , text}) {
  return <button onClick={()=>onpress(this)} className={className}>{text}</button>;
}

export default Button;
