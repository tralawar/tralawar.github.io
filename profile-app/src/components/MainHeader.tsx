import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom';
import { ThemeModeEnum } from '../Types/theme';

interface MainHeaderProps {
    theme: ThemeModeEnum;
    setTheme: Dispatch<SetStateAction<ThemeModeEnum | undefined>>;
}

export const MainHeader: React.FC<MainHeaderProps> = (props) => {
    const { theme, setTheme } = props;
    const themeName = theme === ThemeModeEnum.LIGHT ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT;

    function toggleThemeMode()  {
        theme === ThemeModeEnum.LIGHT ? setTheme(ThemeModeEnum.DARK) : setTheme(ThemeModeEnum.LIGHT)
    }

    return (
        <nav>
            <ul id="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <button onClick={toggleThemeMode}>Switch to {themeName} mode</button>
        </nav>
    );
}