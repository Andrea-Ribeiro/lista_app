import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Formulario from './Formulario';
import Lista from './Lista';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Lista />} />
                <Route path="/Formulario" element = {<Formulario />} />
            </Routes>
        </BrowserRouter>
        );
    
};


export default Rotas;
