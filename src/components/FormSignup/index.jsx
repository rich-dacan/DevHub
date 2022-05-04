/* eslint-disable react/prop-types */
import React from "react";
import Logo from '../../assets/image/Logo.svg';
import { FormRegisterStyles, Button, SpanLogo, Container } from "./styles";
import { AiOutlineEyeInvisible, AiOutlineEye }  from 'react-icons/ai';
import { toast } from 'react-toastify';

import { useState }               from 'react';
import { Link, Navigate, useNavigate }      from 'react-router-dom';
import { useForm }                from 'react-hook-form';
import { yupResolver }            from '@hookform/resolvers/yup';
import * as yup                   from 'yup';

import ButtonExit from '../ButtonExit';
import api        from '../../services/api';

const FormSignup = ({ authenticated, setAuthenticated }) => {
  const [ stateKey, setStateKey ]   = useState(false);
  const navigate = useNavigate();

  const toggleBtn = (e) => {
    e.preventDefault();
    setStateKey(prevState => !prevState);
  }

  const schema = yup.object().shape({
    name: yup.string().required('* Campo obrigatório'),
    email: yup
      .string()
      .required('* Campo obrigatório')
      .email('Email inválido'),
    password: yup
      .string()
      .required('* Campo obrigatório')
      .min(8, '* Mínimo de 8 dígitos'),
    confirmPassword: yup
      .string()
      .required('* Campo obrigatório')
      .oneOf([yup.ref('password')], '* Senhas diferentes'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = ({email, password, name, bio, contact, course_module}) => {
    const user = {email, password, name, bio, contact, course_module};
    api.post('/users', user)
      .then((response) => {
        console.log(response.data)
        toast.success('Usuário cadastrado com sucesso!');
        return navigate(`/`);
      })
      .catch((err) => {
        toast.error('Erro: email já cadastrado!')
      });
    
  }

  if (authenticated) {
    return <Navigate to='/home/:name'/>
  }  

  return (

    <Container>
      <SpanLogo>
        <img className="logo" src={Logo} alt="logo-kenziehub"/>
        <Link to='/'>
          <ButtonExit> Voltar </ButtonExit>
        </Link>
      </SpanLogo>
      
      <FormRegisterStyles onSubmit={handleSubmit(onSubmit)}>

        <h2> Crie sua conta </h2>
        <p> Rápido e grátis, vamos nessa! </p>

        <label>
          <span className='label__wrapper'>
            <p className='label'> Nome </p> 
            <p className="errors">{errors.name?.message}</p>
          </span>
          <input 
            type="text" 
            placeholder='Digite aqui seu nome'
            {...register('name')}
          />
        </label>

        <label>
          <span className='label__wrapper'>
            <p className='label'> Email </p> 
            <p className="errors">{errors.email?.message}</p>
          </span>
          <input 
            type="text" 
            placeholder='Digite aqui seu email'
            {...register('email')}
          />
        </label>

        <label>
          <span className='label__wrapper'>
            <p className='label'> Contato </p> 
            <p className="errors">{errors.name?.message}</p>
          </span>
          <input 
            type="text" 
            placeholder='Digite aqui seu contato'
            {...register('contact')}
          />
        </label>

        <label>
          <span className='label__wrapper'>
            <p className='label'> Bio </p> 
            <p className="errors">{errors.name?.message}</p>
          </span>
          <input 
            type="text" 
            placeholder='Um breve resumo sobre você'
            {...register('bio')}
          />
        </label>   

        <label>
          <span className='label__wrapper'>
            <p className='label'> Senha </p> 
            <p className="errors">{errors.password?.message}</p>
          </span>
          <div className='input__wrapper'>
            <input 
              type={stateKey ? 'text' : 'password'}
              placeholder='Digite aqui sua senha' 
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
        </label>

        <label>
          <span className='label__wrapper'>
            <p className='label'> Confirmar Senha </p> 
            <p className="errors">{errors.confirmPassword?.message}</p>
          </span>
          <div className='input__wrapper'>
            <input 
              type={stateKey ? 'text' : 'password'} 
              placeholder='Digite novamente sua senha' 
              {...register('confirmPassword')} 
            />
            <button onClick={toggleBtn}>
              {stateKey ? 

                <AiOutlineEyeInvisible/>
                :

                <AiOutlineEye/>
              }
            </button>
          </div>
        </label>

        <label>
          <span className='label__wrapper'>
            <p className='label'> Selecione o módulo </p> 
            <p className="errors">{errors.name?.message}</p>
          </span>
          <select {...register('course_module')}>
            <option 
              value="Primeiro módulo (Introdução ao Frontend)" 
              
            > Primeiro módulo  
            </option>
            <option 
              value="Segundo módulo (Frontend Avançado)" 
              
            > Segundo módulo 
            </option>
            <option 
              value="Terceiro módulo (Introdução ao Backend)" 
              
            > Terceiro módulo 
            </option>
            <option 
              value="Quarto módulo (Backend Avançado)" 
              
            > Quarto módulo 
            </option>
        </select>
        </label>

        <Button register type='submit'> Cadastrar </Button>
      
      </FormRegisterStyles>
      
    </Container>
  )
}
export default FormSignup;