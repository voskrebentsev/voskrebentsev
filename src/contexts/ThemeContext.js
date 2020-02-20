import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
  const [isLight, toggleLight] = useState(false);

  return (
    <ThemeContext.Provider value={{isLight, toggleLight}}>
      {props.children}
    </ThemeContext.Provider>
      
  )
}

export default ThemeContextProvider
