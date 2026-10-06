import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("light")
  return (
    <div>
        <ThemeContext.Provider value={{theme,setTheme}} >
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider