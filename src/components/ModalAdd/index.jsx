/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React from "react";
import './styles.css';
import { SpanContainer, ModalStyles, ButtonTask, WrapperBtnModal } from "./styles";
import Modal           from "react-modal";
import { useState }    from "react";
import { useForm }     from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup        from 'yup';
import { toast }       from 'react-toastify';
import api             from '../../services/api';

const ModalNewTech = ({tech, setTech}) => {

  const [modalOpen, setModalOpen]=  useState(false);

  const token = JSON.parse(localStorage.getItem('@KenzieHub: token'));

  const handleOPenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const schema = yup.object().shape({
    title: yup.string().required('Campo obrigatório!'),
    status: yup.string().required('Campo obrigatório!')
  });

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver:yupResolver(schema)
  });

  const onSubmit = (data) => {
    api
      .post('/users/techs', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        
      .then((response) => setTech([...tech, response.data]))
      .then((_) => toast.success('Tech adicionada com sucesso!'))

      handleCloseModal()
  }
  
  return (
    <>
      <WrapperBtnModal onClick={handleOPenModal}>
        +
      </WrapperBtnModal>
      
      <Modal
        isOpen={modalOpen}  
        onRequestClose={handleCloseModal}
        className='Modal'
      >

        <SpanContainer className="header__modal">
          <h2> Cadastrar Tecnologia </h2>
          <button onClick={handleCloseModal}> X </button>
        </SpanContainer>

        <ModalStyles onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span className='label__wrapper'>
              <p className='label'> Nome </p> 
              <p className="errors">{errors.title?.message}</p>
            </span>
            <input 
              type="text" 
              placeholder="Ex: Material UI"
              {...register('title')}              
            />
          </label>
          <label>
          <span className='label__wrapper'>
              <p className='label'> Selecione seu nível atual </p> 
              <p className="errors">{errors.title?.message}</p>
            </span>
            <select {...register('status')}>
              <option value="Iniciante"> Iniciante </option>
              <option value="Intermediário"> Intermediário </option>
              <option value="Avançado"> Avançado </option>
            </select>
          </label>
          <div className="container__btn">
          <ButtonTask type='submit'> Cadastrar </ButtonTask>
          </div>
        </ModalStyles>
      </Modal>
    </>
  )
}
export default ModalNewTech;


