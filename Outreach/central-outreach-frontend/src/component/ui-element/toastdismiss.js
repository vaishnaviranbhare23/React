import React, { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

const ToastDismiss = (props) => {
  // const { buttonLabel } = props;

  var show = props.toastShow;
  const toggle = () => (show = false);

  return (
    <div style={{ position: "relative", top: "50%", left: "20%" }}>
      <br />
      <br />
      <Toast isOpen={show}>
        <ToastHeader>{props.toastHeader}</ToastHeader>
        <ToastBody>{props.toastBody}</ToastBody>
      </Toast>
    </div>
  );
};

export default ToastDismiss;
