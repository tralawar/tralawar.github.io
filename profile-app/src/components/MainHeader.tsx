import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThemeModeEnum } from '../Types/theme';
import { LogoIcon } from './icons';
import { Display3 } from './Typography';

interface MainHeaderProps {
    themeMode: ThemeModeEnum;
    setTheme: Dispatch<SetStateAction<ThemeModeEnum | undefined>>;
}

const Navbar = styled.nav`                                               
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme === 'dark' ? '#fff' : '#333'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .75rem 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0.5rem;
        height: auto;
        box-shadow: none;
    }
`;

const Brand = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    text-decoration: none;
    gap: 20px;
`;
const MenuList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    padding: 0.5rem 1rem;
    gap: 24px;
    margin: 0;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        display: none;
    }   
`;

export const MainHeader: React.FC<MainHeaderProps> = (props) => {
    const { themeMode, setTheme } = props;
    const themeName = themeMode === ThemeModeEnum.LIGHT ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT;

    function toggleThemeMode() {
        themeMode === ThemeModeEnum.LIGHT ? setTheme(ThemeModeEnum.DARK) : setTheme(ThemeModeEnum.LIGHT)
    }

    return (
        <Navbar>

            <Brand to="/">
                <LogoIcon className="logo" />
                <Display3>Creative Blocks</Display3>
            </Brand>
            <MenuList>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <button onClick={toggleThemeMode}>Switch to {themeName} mode</button>
            </MenuList>
        </Navbar>
    );
}