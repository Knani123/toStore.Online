import React from "react";
import { Paper, makeStyles, Button, Grid } from "@material-ui/core";
import { auth } from "../firebase/config";
import Head from "./Head";
import Footer from "./Footer";
import AllProducts from "./allproducts/AllProducts";
import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollToTop from "./scroll/ScrollToTop";
import AllCard from "./card";
import Pub from "./pub/pub";

const useStyle = makeStyles((theme) => ({
     root: {
          minHeight: "120vh",
          overflow: "hiden",
     },
}));
const Home = () => {
     const classes = useStyle();

     return (
          <div>
               <div container className={classes.root} direction="column">
                    <Head />
                    <AllProducts />
                    <AllCard />
               </div>
               <Footer />
               <Pub />
               <ScrollToTop />
               <CssBaseline />
          </div>
     );
};

export default Home;
