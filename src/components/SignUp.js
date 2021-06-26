import React, { useState } from "react";
import { Paper, makeStyles, Button } from "@material-ui/core";
import { auth } from "../firebase/config";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "auto",
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

const initialState = {
  email: "",
  password: "",
};

const SignUp = () => {
  const classes = useStyle();
  const history = useHistory();
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(input.email, input.password)
      .then((data) => {
        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <Paper elevation={3} className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.root}>
        <h3>SignUp</h3>
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input type="password" name="password" onChange={handleChange} />
        <Button variant="outlined" size="small" color="primary" type="submit">
          Small
        </Button>
      </form>
    </Paper>
  );
};

export default SignUp;
