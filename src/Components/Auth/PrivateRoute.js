// import React from 'react'
// import { Navigate, Redirect, Route } from 'react-router-dom'

// const PrivateRoute = ({component: Component, ...rest}) => {

//     const isLoggedIn = AuthService.isLoggedIn()

//     return (
//         <Route 
//             {...rest}
//                 render={props => 
//                 {return isLoggedIn ? (
//                     <Component {...props} />
//                 ) : (
//                     <Navigate to={{ pathname: './Auth/Login', state: { from: "./Auth/Login" } }} />
//                 )
//             }
//                 }/>
//     )   
// }

// //export default PrivateRoute