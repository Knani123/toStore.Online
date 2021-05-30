import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Paper, makeStyles, Button, ButtonGroup } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { auth } from "../firebase/config";
import { useAuth } from "../auth/useAuth";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography, TextField } from "@material-ui/core";
import { Hidden } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
     root: {
          maxWidth: 400,
          margin: "50px auto",
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          [theme.breakpoints.down("xs")]: {
               maxWidth: "350",
               margin: "50px 20px",
          },
     },
}));

const initialState = {
     email: "",
     password: "",
};

const Login = () => {
     const history = useHistory();
     const classes = useStyle();
     const [input, setInput] = useState(initialState);
     const [error, setError] = useState(null);
     const [succ, setSecc] = useState(null);
     const { user, setLoading, loading } = useAuth();
     console.log("succ", succ);
     useEffect(() => {
          if (user && !succ) {
               history.push("/");
          }
     }, [user]);
     useEffect(() => {
          if (succ) {
               setTimeout(() => {
                    history.push("/");
               }, 2000);
          }
     }, [succ]);

     const handleSubmit = (e) => {
          e.preventDefault();
          auth.signInWithEmailAndPassword(input.email, input.password)
               .then((data) => {
                    console.log("data", data);
                    setError(null);
                    setSecc("Login success");
               })
               .catch((err) => {
                    console.log(err.message);
                    setError(err.message);
               });
     };
     const handleChange = (e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
     };
     if (loading) {
          return (
               <div
                    style={{
                         height: "700px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center",
                    }}
               >
                    <CircularProgress />
               </div>
          );
     }
     return (
          <Paper elevation={3} className={classes.root}>
               {error && (
                    <MuiAlert severity="error" style={{ width: "80%" }}>
                         {error}
                    </MuiAlert>
               )}
               {succ && (
                    <MuiAlert severity="success" style={{ width: "80%" }}>
                         {succ}
                    </MuiAlert>
               )}
               <form onSubmit={handleSubmit} className={classes.root}>
                    <h2>ToStore.Online</h2>
                    <TextField
                         label="Email"
                         required
                         type="email"
                         placeholder="Email admin"
                         name="email"
                         onChange={handleChange}
                    />
                    <TextField
                         label="Password"
                         type="password"
                         placeholder="Password"
                         name="password"
                         onChange={handleChange}
                    />
                    <Button
                         variant="outlined"
                         size="small"
                         type="submit"
                         startIcon={<VpnKeyIcon />}
                    >
                         <Hidden xsDown>Login</Hidden>
                    </Button>
               </form>
               <Typography>
                    Or look at home as visiter <Link to="/">Home</Link>
               </Typography>
          </Paper>
     );
};

export default Login;
