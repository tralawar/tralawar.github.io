import React from 'react'
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import About from './scenes/About';
import Home from './scenes/Home';


interface RoutesProps {

}

export const Routes: React.FC<RoutesProps> = ({ }) => {
    return (
        <RouterRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </RouterRoutes>
    );
}