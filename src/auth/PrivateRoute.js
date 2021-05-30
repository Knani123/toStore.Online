import React,{useState,useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import {useAuth} from "./useAuth"

import CircularProgress from '@material-ui/core/CircularProgress';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const {loading,user}=useAuth()

    if(loading){return <div style={{height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}}><CircularProgress/></div>}
  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Redirect to="/login" /> : <> <Component user={user} {...props} />
        </>
      }
    />
  );
};

export default PrivateRoute;