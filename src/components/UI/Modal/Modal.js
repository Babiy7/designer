import React from "react";
import classes from "./Modal.module.scss";

import Backdrop from "../Backdrop/Backdrop";
import ButtonClose from "../ButtonClose/ButtonClose";

const Modal = props => {
  let modal = null;

  if (props.size === "lg") {
    modal = [classes.Modal, classes.Large].join(" ");
  } else {
    modal = [classes.Modal, classes.Small].join(" ");
  }

  return (
    <Backdrop show={props.show} unShow={props.unShow}>
      <div
        className={modal}
        style={{
          width: `${props.width}px`,
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          transition: "transform 1s linear",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
        <ButtonClose />
      </div>
    </Backdrop>
  );
};

export default Modal;
