import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Edit from "../Edit";

import {
  Card,
  Divider,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import cardAction from "../Amzone";
// import InfoProduct from '../InfoProduct';
import InfoProduct from "../InfoProduct";
import { useAuth } from "../../auth/useAuth";
const useStyle = makeStyles((theme) => ({
  card: {
    border: "1px solid #009",
    overflowX: "hidden",
    maxHeight: 300,
    maxWidth: 300,
    margin: 2,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 250,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 220,
    },
  },
  cardaction: {
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    cursor: "pointer",
  },
  btn: {
    width: "100%",
  },
}));

export default function CardText({ product }) {
  const { user } = useAuth();
  console.log("product", product);
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log("pro", product);
  return (
    <Card className={classes.card} elevation={5}>
      <CardHeader
        style={{ margin: "0 5px", padding: 0 }}
        action={
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton style={{ padding: 10, color: "#e22" }}>
              <FavoriteIcon />
            </IconButton>
            {user && <Edit product={product} />}
          </span>
        }
        title={
          <Typography variant="subtitle2" gutterBottom>
            {product.name}
          </Typography>
        }
      />
      <CardMedia
        onClick={() => setOpen(true)}
        image={product.url}
        style={{
          height: "150px",
          width: "99%",
          margin: "auto",
          cursor: "pointer",
        }}
      />
      <CardContent style={{ height: "30px", padding: 0, margin: 0 }}>
        <Typography variant="caption" color="textSecondary" component="p">
          {product.category} {product.prix}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardaction}>
        <InfoProduct product={product} open={open} setOpen={setOpen} />
        {/* {cardAction()} */}
      </CardActions>
    </Card>
  );
}
