import React, { FunctionComponent } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import Home from '../containers/home';
import SignUp from '../containers/signup';

const NavRoutes: FunctionComponent = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate replace to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/register' element={<SignUp />} />

                <Route path='*' element={<Navigate replace to='/home' />} />
            </Routes>
        </BrowserRouter>
    );
};

export default NavRoutes;