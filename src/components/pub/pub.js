import React, { useState, useEffect } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { IconButton } from "@material-ui/core";

const Pub = () => {
     const [affich, setAffich] = useState(false);
     const [del, setDel] = useState(false);
     useEffect(() => {
          setTimeout(() => {
               setAffich(true);
          }, 3000);
          setTimeout(() => {
               setDel(true);
          }, 6000);
     }, []);

     return (
          <div
               style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80%",
                    height: "50%",
                    border: "1px solid red",
                    position: "fixed",
                    top: "30vh",
                    backgroundColor: "red",
                    zIndex: "10",
                    display: !affich && "none",
                    borderRadius: "20px",
               }}
          >
               <IconButton
                    style={{
                         float: "right",
                         margin: "5px",
                         fontSize: "30px",
                         display: !del && "none",
                         color: "#fff",
                    }}
                    onClick={() => setAffich(false)}
               >
                    <HighlightOffIcon />
               </IconButton>
               <h1>this is pub </h1>
          </div>
     );
};

export default Pub;
