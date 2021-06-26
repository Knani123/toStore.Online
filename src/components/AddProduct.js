import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
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
}));

const initialState = { name: "", prix: "", url: "", category: "" };
export default function ({ cardAction }) {
  const classes = useStyles();
  const [input, setInput] = useState(initialState);
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
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    db.collection("Products").add(input);
    setInput(initialState);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  return (
    <div>
      <Button
        startIcon={<AddToPhotosIcon />}
        type="button"
        onClick={handleOpen}
      >
        Add Product
      </Button>
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
              Add Product
            </Typography>
            <br />
            <TextField
              required
              value={input.name}
              name="name"
              type="text"
              label="Nom Product"
              onChange={handleChange}
            />
            <TextField
              required
              value={input.url}
              name="url"
              type="url"
              label="URL"
              onChange={handleChange}
            />
            <TextField
              required
              value={input.prix}
              name="prix"
              type="number"
              label="Prix"
              onChange={handleChange}
            />
            <TextField
              required
              value={input.category}
              name="category"
              type="category"
              label="category"
              onChange={handleChange}
            />
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
