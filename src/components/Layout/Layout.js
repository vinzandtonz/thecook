import Aux from "../../hoc/Aux";
import React from "react";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Aux>
    <div>Toolbar, Side nav & backdrop </div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);
export default layout;
	