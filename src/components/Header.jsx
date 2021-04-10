import React, {useState, useContext} from 'react';
import ThemeContext from '../Context/ThemeContext.js'

const Header = () => {

    const [ darkMode, setDarkMode ] = useState(false);
    const color = useContext(ThemeContext)

    // const handleClick = () => {
    //     setDarkMode(!darkMode)
    // }


    return (
        <div className="Header">
            <h1 style={{color}}>ReactHooks</h1>
            {/* Funcion Anónima */}
            {/* <button type="button" onClick={handleClick}>DarkMode {darkMode ? 'Dark Mode' : 'Ligth 🚈 '}</button> */}
            <button type="button" onClick={() => setDarkMode(!darkMode)}>DarkMode {darkMode ? 'Dark Mode' : 'Ligth 🚈 '}</button>
        </div>

    );
}
export default Header;