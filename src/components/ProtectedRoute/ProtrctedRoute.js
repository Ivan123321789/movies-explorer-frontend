import React from 'react';
 import {Navigate} from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
     return ( 
      !props.isLoggedIn ? <Navigate to='/' replace /> : <Navigate to='/movies' replace />      
)}

 export default ProtectedRoute;