/* eslint-disable react/prop-types */
import React from 'react';
import FormRegister from "../../components/FormSignup";
import { Container } from "../Home/styles";
import { motion } from "framer-motion";

const Signup = ({ authenticated, setAuthenticated }) => {

  return (

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:2}}
    >
      <Container>

        <FormRegister authenticated={authenticated} setAuthenticated={setAuthenticated}/>

      </Container>
  
    </motion.div>
  )
}
export default Signup;
