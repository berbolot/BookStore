import React, { useEffect, useState } from "react";
import error from "./img/404.webp";
import classes from "./styles.module.css";

const FnError = () => {
  let i = 0;
  let txt = "Oops sorry.";
  let speed = 500;
  let dd = "";

  const [text, setText] = useState("");

  function typeWriter() {
    if (i < txt.length) {
      setText((dd += txt.charAt(i)));
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div>
      <h1 id="demo">{text}</h1>
      <br />

      <div className={classes.container}>
        <img className={classes.image} src={error} alt="404" />
        <div className={classes.overlay}>
          <div className={classes.text}></div>
        </div>
      </div>
    </div>
  );
};

export default FnError;
