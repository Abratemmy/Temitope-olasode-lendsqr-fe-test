import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Auth from '../pages/auth/Login/auth';
import NoPages from '../pages/noPages/noPages';
import UserDetail from '../pages/userDetails/userDetail';
import Users from '../pages/users/users';


const Router = ()=>(
    <Routes>
        <Route exact path ='/Temitope-olasode-lendsqr-fe-test' caseSensitive={false} element={<Auth/>} />
        <Route exact path='/users' caseSensitive={false} element={<Users/>}/>
        <Route exact path='/users/:id'caseSensitive={false} element={<UserDetail/>} />
        <Route exact path='/no_page_yet' caseSensitive={false} element={<NoPages />} />  
    </Routes>
)
export default Router