/* eslint-disable react/prop-types */
import { useState } from 'react';
import { styles, hoverStyles } from './style';

// com lo style inline non possiamo usare i benefici del css tradizionale, ad esempio pseudo classi :hover, :active, :focus o altre @rule quindi queste caratteristiche del css non posso gestirle in plain js. 

export default function InlineStyleButton({ children }) {
  const [ currentStyle, setCurrentStyle ] = useState(styles); 

  return (
    <button 
      style={currentStyle}
      onMouseEnter={() => setCurrentStyle({ ...styles, ...hoverStyles })}
      onMouseLeave={() => setCurrentStyle(styles)}
      >
      { children }
    </button>
  )
}

