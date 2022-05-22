/* eslint-disable react/prop-types */
import React from "react";
import Logo from '../../assets/image/Logo.svg'
import ButtonExit from '../ButtonExit';
import { HeaderStyles } from './styles';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ authenticated, setAuthenticated }) => {
 
  const resetSession = () => {

    if (authenticated) {
      localStorage.clear();
      setAuthenticated(false);
      
      <Navigate to='/'/>
    }
    
  }

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:2}}
    >
      <HeaderStyles>

        {/* <img src={Logo} alt="logo-kenziehub" /> */}
        <span>
          <h1> Dev </h1>
          <h1 className="colorHub"> Hub</h1>
        </span>

        <ButtonExit onClick={resetSession}> Sair </ButtonExit>

      </HeaderStyles>
    </motion.div>
  )
}
export default Header;
