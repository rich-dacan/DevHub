/* eslint-disable react/prop-types */
import React from 'react';
import { Container, MainContent } from "../Home/styles";

import api          from '../../services/api'
import Header       from "../../components/Header";
import Footer       from "../../components/Footer";
import ListTechs    from "../../components/ListTechs";
import ModalNewTech from "../../components/ModalAdd";
import UserGreeting from "../../components/UserGreeting";

import { motion }   from "framer-motion";
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = ({ authenticated, setAuthenticated }) => {
  const [ tech, setTech ] = useState([]);

  const token = JSON.parse(localStorage.getItem('@KenzieHub: token'));
  const user  = JSON.parse(localStorage.getItem('@KenzieHub: user'));

  const loadTechs = () => {
    api
      .get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => setTech(response.data.techs));
  }

  useEffect(() => {

    loadTechs();

  }, [tech]);

  if (!authenticated) {
    return <Navigate to='/'/>
  }

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:2}}
    >

      <Header authenticated={authenticated} setAuthenticated={setAuthenticated}/>

      <Container>

       <UserGreeting name={user.name} module={user.course_module}/>

        <MainContent>
       
          <div className="header__mainCard">
            <h2> Tecnologias</h2>
            <ModalNewTech tech={tech} setTech={setTech}/>
          </div>

          <div className="main__card__container">
            {tech.length > 0 ? 

              <ListTechs tech={tech} setTech={setTech}/> 
            
            : 
              <div className='empty'>

                <h3> Ops, tudo muito calmo por aqui...</h3>

                <p> 
                  Adicione suas habilidades no botão logo acima <BsArrowUpRightSquareFill/>
                </p>

              </div>   
            }
          </div>

        </MainContent>

        <Footer/>

      </Container>

    </motion.div>
  )
}
export default Home;
