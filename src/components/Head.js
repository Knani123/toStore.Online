import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MenuItem, Menu } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useAuth } from "../auth/useAuth";
import { auth } from "../firebase/config";

const useStyles = makeStyles((theme) => ({
     root: {
          flexGrow: 1,
          margin: 0,
          overflow: "hidden",
     },
     menuButton: {
          // marginRight: the+me.spacing(2),
     },
     title: {
          flexGrow: 1,
          color: "#fa0",
     },
     appBar: {
          overflow: "hidden",
          padding: 5,
          backgroundColor: "#000",
     },
}));

const Head = () => {
     const { loading, user } = useAuth();
     console.log(Boolean(user));

     const history = useHistory();
     const classes = useStyles();
     const [anchorEl, setAnchorEl] = React.useState(null);
     const open = Boolean(anchorEl);

     const handleMenu = (event) => {
          setAnchorEl(event.currentTarget);
     };

     const handleClose = () => {
          setAnchorEl(null);
     };
     const logout = () => {
          auth.signOut();
          history.push("/login");
     };
     return (
          <div className={classes.root}>
               <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                         <Typography
                              variant="h4"
                              className={classes.title}
                              align="center"
                         >
                              ToStore.Online
                         </Typography>

                         <div>
                              <IconButton
                                   aria-label="account of current user"
                                   aria-controls="menu-appbar"
                                   aria-haspopup="true"
                                   onClick={handleMenu}
                                   color="inherit"
                              >
                                   <MenuIcon />
                              </IconButton>
                              <Menu
                                   id="menu-appbar"
                                   anchorEl={anchorEl}
                                   anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                   }}
                                   keepMounted
                                   transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                   }}
                                   open={open}
                                   onClose={handleClose}
                              >
                                   <MenuItem onClick={handleClose}>
                                        About
                                   </MenuItem>
                                   <MenuItem onClick={handleClose}>
                                        Contact
                                   </MenuItem>
                                   {user && (
                                        <MenuItem onClick={logout}>
                                             Logout
                                        </MenuItem>
                                   )}
                              </Menu>
                         </div>
                    </Toolbar>
               </AppBar>
          </div>
     );
};

export default Head;
