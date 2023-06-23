import React, { useContext} from 'react'
import { Route } from 'react-router-dom'
//import AuthContext from '../../context/auth/authContext'

const PrivateRoute: React.FC = ({  auth, path, element } ) => {
    const authContext = useContext( AuthContext );
    //const { isAuthenticated, loading } = authContext;
    const { isAuthenticated, loading } = auth;
  return (
    <>
    <Route path={path} element={element}  />
    </>
  )
}


export default PrivateRoute