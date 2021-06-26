import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Typography, Button } from "@material-ui/core";
import Avatars from "./Amzone";

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
  btn: { width: "100%" },
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

export default function InfoProduct({ open, setOpen, product }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <span
        onClick={handleClose}
        style={{
          float: "right",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          width: "25px",
          height: "25px",
          color: "#fff",
          borderRadius: "50%",
        }}
      >
        X
      </span>
      <h1 style={{ textAlign: "center" }}>{product.name}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        distinctio ab, possimus, enim error quod quidem delectus, magnam ratione
        tenetur autem excepturi consectetur amet quisquam nesciunt officiis cum
        sequi praesentium.
      </p>
      <b />
      <Typography align="center" style={{ margin: "20px 5px" }}>
        <strong>Get it! Best price & quality</strong>
      </Typography>
      <Avatars />
    </div>
  );

  return (
    <>
      <Button
        variant="contained"
        size="small"
        className={classes.btn}
        onClick={handleOpen}
      >
        See more
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </>
  );
}
