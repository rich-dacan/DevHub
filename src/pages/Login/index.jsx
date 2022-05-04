/* eslint-disable react/prop-types */
import React from 'react';
import FormLogin from "../../components/FormLogin";
import { Container } from "../Home/styles";
import { motion } from "framer-motion";

const Login = ({ authenticated, setAuthenticated }) => {

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 2}}
    >
    
      <Container>

        <FormLogin authenticated={authenticated} setAuthenticated={setAuthenticated} /> 

      </Container>
    
    </motion.div>
  )
}
export default Login;
