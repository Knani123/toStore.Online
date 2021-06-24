import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, FormControl, InputLabel, Select } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import {
  Modal,
  Typography,
  TextField,
  Divider,
  Button,
} from "@material-ui/core";
import { db } from "../firebase/config";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  remove: {
    display: "flex",
    float: "right",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: "25px",
    height: "25px",
    color: "#fff",
    borderRadius: "50%",
  },
  paper: {
    position: "absolute",
    width: "80%",
    maxWidth: "400px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  option: {
    width: "100%",
    cursor: "pointer",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// const initialState = { name: "", prix: "", url: "" };
export default function ({ product }) {
  console.log("product edit", product);
  const classes = useStyles();
  const [input, setInput] = useState(product);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    console.log("input from edit", input);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    db.collection("Products")
      .doc(product.id)
      .set({ ...input }, { merge: true });
    setTimeout(() => {
      setOpen(false);
    }, 1000);
    // setInput(product);
  };
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <InfoIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <div>
          <form
            style={modalStyle}
            className={classes.paper}
            onSubmit={handleAdd}
          >
            <span onClick={handleClose} className={classes.remove}>
              X
            </span>
            <Typography variant="h4" align="center">
              Edit Product
            </Typography>
            <br />
            <TextField
              required
              value={input.name}
              name="name"
              type="text"
              label="Nom Product"
              onChange={handleChange}
            />{" "}
            <br />
            <TextField
              required
              value={input.url}
              name="url"
              type="url"
              label="URL"
              onChange={handleChange}
            />{" "}
            <br />
            <TextField
              required
              value={input.prix}
              name="prix"
              type="number"
              label="Prix"
              onChange={handleChange}
            />{" "}
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel>category</InputLabel>
              <Select
                required
                value={input.category}
                name="category"
                type="category"
                label="category"
                onChange={handleChange}
              >
                <option className={classes.option} aria-label="None" value="" />
                <option className={classes.option} value="IT">
                  IT
                </option>
                <option className={classes.option} value="Immovable">
                  Immovable
                </option>
                <option className={classes.option} value="Vehicle">
                  Vehicle
                </option>
                <option className={classes.option} value="Clothing">
                  Clothing
                </option>
                <option className={classes.option} value="Food">
                  Food
                </option>
                <option className={classes.option} value="Leisure">
                  Leisure
                </option>
                <option className={classes.option} value="Home">
                  Home
                </option>
              </Select>
            </FormControl>
            <Divider />
            <Button
              size="small"
              color="primary"
              variant="contained"
              type="submit"
            >
              Add
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
