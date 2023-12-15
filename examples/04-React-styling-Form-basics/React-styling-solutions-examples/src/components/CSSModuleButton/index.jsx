/* eslint-disable react/prop-types */
import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

export default function CSSModuleButton({ children }) {
  const [ espansione, setEspansione ] = useState(false); 

  return (
    // Passare classi dall oggetto module styles
    // <button className={`${styles.button} ${styles.altriStili}`}>{ children }</button>

    // Passare classi come un array di stringhe
    // <button className={[
    //   styles.button, 
    //   styles.AltroStyle
    // ].join(' ')}>{ children }</button>

    // Applicazione classe attraverso il conditional rendering...
    // <button
    //   onClick={() => setEspansione(!espansione)} 
    //   className={`${styles.button} ${espansione ? styles.fullWidth : ''}`}
    //   >
    //   { children }
    // </button>

      // Passare classi in conseguenza ad eventi con array...
      // <button
      //   onClick={() => setEspansione(!espansione)} 
      //   className={[
      //     styles.button, 
      //     espansione ? styles.fullWidth : '', 
      //   ].join(' ')}
      //   >
      // { children }
      // </button>

      // https://www.npmjs.com/package/classnames
      // pacchetto per passare classi in modo dinamico...
      <button
        onClick={() => setEspansione(!espansione)} 
        className={classNames(styles.button, espansione ? styles.fullWidth : '')}
        >
      { children }
      </button>
  )
}



