import React from "react";
import classes from "./styles.module.css";

const Loading = () => {
  return (
    <div>
      <div className={classes.loader}>
        <div className={`${classes.inner} ${classes.one}`}></div>
        <div className={`${classes.inner} ${classes.two}`}></div>
        <div className={`${classes.inner} ${classes.three}`}></div>
      </div>
    </div>
  );
};

export default Loading;
