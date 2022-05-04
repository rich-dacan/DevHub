/* eslint-disable react/prop-types */
import React from "react";
import Logo from '../../assets/image/Logo.svg'
import { FormLoginStyles, Button, SpanLogo, Copy }   from "./styles";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { useState }             from 'react';
import { Link, Navigate, useNavigate }    from 'react-router-dom';
import { useForm }              from 'react-hook-form';
import { yupResolver }          from '@hookform/resolvers/yup';
import * as yup                 from 'yup';

import api from '../../services/api';
 
const FormLogin = ({ authenticated, setAuthenticated }) => {

  const [ stateKey, setStateKey ] = useState(false);
  const navigate = useNavigate();

  const toggleBtn = (e) => {
    e.preventDefault();
    setStateKey(prevState => !prevState);
  }

  const schema = yup.object().shape({
    email: yup.string().required('Campo obrigatório!').email('Email inválido!'),
    password: yup.string().required('Campo obrigatório!').min(6, 'Senha inválida'),

  })

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    api
      .post('/sessions', data)
      .then(response => {

        const { token, user }  = response.data;

        localStorage.setItem('@KenzieHub: token', JSON.stringify(token));
        localStorage.setItem('@KenzieHub: user', JSON.stringify(user));
        
        setAuthenticated(true);
        
        toast.success('Login feito com sucesso!')

        console.log(response.data);

        return navigate(`/home/${user.name}`)

      })
      .catch(err => toast.error('Email ou senha inválido!'));
      
  };

  if (authenticated) {
    return <Navigate to='/home/:name'/>
  }

  return (

    <>
      <SpanLogo>
        <img className="logo" src={Logo} alt="logo-kenziehub" />
      </SpanLogo>
      <FormLoginStyles onSubmit={handleSubmit(onSubmit)}>

        <h2> Login </h2>

        <label>
          Email
          <input type="text" {...register('email')} />
          <p className="errors">{errors.email?.message}</p>
        </label>
        <label>
          Senha
          <div className='input__wrapper'>
            <input 
              type={stateKey ? 'text' : 'password'} 
              {...register('password')}
            />
            <button onClick={toggleBtn}>
              {stateKey ? 

                <AiOutlineEyeInvisible/>
                :
                <AiOutlineEye/>
              }
            </button>
          </div>
          <p className="errors">{errors.password?.message}</p>
        </label>

        <Button login type='submit'> Login </Button>

        <p> Ainda não possui uma conta? </p>

        <Link to='/signup'>
          <Button> Cadastre-se </Button>
        </Link>

      </FormLoginStyles>

      <Copy>
        <p> Copyright &copy; 2022 | 
          <a href="https://kenzie.com.br/" target='_blank'> Kenzie Academy Brasil. </a>
        </p>
        <p> All rights reserved. </p>
      </Copy>
    
    </>
  )
}
export default FormLogin;
