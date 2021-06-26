import { Grid, makeStyles, Button, CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import Card from "./Card";
import IconButton from "@material-ui/core/IconButton";
import { useAuth } from "../../auth/useAuth";
import { auth, db } from "../../firebase/config";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddProduct from "../AddProduct";
import AddIcon from "@material-ui/icons/Add";
const useStyle = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    width: "100%",
    boxSizing: "border-box",
  },
  card: {
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    width: 180,
    height: 180,
    borderRadius: "50%",
    margin: 5,
    border: "1px solid blue",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 250,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 160,
    },
  },
  add: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
  },
}));
const AllCard = ({ filter }) => {
  const { user } = useAuth();
  const classes = useStyle();
  const [tab, setTab] = useState([]);
  React.useEffect(() => {
    const unsub = db.collection("Products").onSnapshot((snap) => {
      let products = snap.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        url: doc.data().url,
        prix: doc.data().prix,
        category: doc.data().category,
        fav: doc.data().fav,
      }));
      setTab(products);
    });

    return unsub;
  }, []);
  const filterProduct = (filter) => {
    switch (filter) {
      case "Fav":
        return (
          <>
            {tab
              .filter((product) => product.fav)
              .map((product) => (
                <Grid item md={3} sm={4} xs={6}>
                  <Card product={product} />
                </Grid>
              ))}
          </>
        );
      case "All":
        return (
          <>
            {tab.map((product) => (
              <Grid item md={3} sm={4} xs={6}>
                <Card product={product} />
              </Grid>
            ))}
          </>
        );
      default:
        return (
          <>
            {tab
              .filter((product) => product.category == filter)
              .map((product) => (
                <Grid item md={3} sm={4} xs={6}>
                  <Card product={product} />
                </Grid>
              ))}
          </>
        );
    }
  };
  return (
    <Grid container align="center" spacing={1} classNme={classes.root}>
      {user && (
        <Grid item md={3} sm={4} xs={6} className={classes.add}>
          <div className={classes.card}>
            <AddProduct />
          </div>
        </Grid>
      )}
      {/* {filter != "All" ? (
        <>
          {tab
            .filter((product) => product.category == filter)
            .map((product) => (
              <Grid item md={3} sm={4} xs={6}>
                <Card product={product} />
              </Grid>
            ))}
        </>
      ) : (
        <>
          {tab.map((product) => (
            <Grid item md={3} sm={4} xs={6}>
              <Card product={product} />
            </Grid>
          ))}
        </>
      )} */}
      {filterProduct(filter)}

      <CssBaseline />
    </Grid>
  );
};

export default AllCard;
