/* eslint-disable react/prop-types */
import React from "react";

import { BtnExitStyles } from "./styles";

const ButtonExit = ({children, ...rest}) => {
  return (
    <>
      <BtnExitStyles {...rest}> {children} </BtnExitStyles>
    </>
  )
}
export default ButtonExit;

