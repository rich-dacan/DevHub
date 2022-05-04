/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';
import Modal           from "react-modal";
import { SpanContainer, ModalStyles, ButtonTask, WrapperBtnModal } from "./styles";
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { useState }           from "react";
import { toast }              from 'react-toastify';
import { useForm }            from 'react-hook-form';
import { yupResolver }        from '@hookform/resolvers/yup';
import * as yup               from 'yup';
import api                    from '../../services/api';

const ModalEditTech = ({tech, setTech, id, title}) => {

  const [modalOpen, setModalOpen] =  useState(false);

  const token = JSON.parse(localStorage.getItem('@KenzieHub: token'));

  const handleOPenModal  = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const schema = yup.object().shape({
    status: yup.string().required('Campo obrigatório!')
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const editTech   = (data) => {
    api
      .put(`/users/techs/${id}`, data, {
        body: {
          data
        },
        headers: {
          Authorization: `Bearer: ${token}`,
        }
      })
      // .then((response) => setTech([...tech, response.data]))
      .then((response) => console.log(response.data))
      .then((_) => toast.success('Tech atualizada com sucesso!'))
    handleCloseModal()         
  }

  const deleteTech = () => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer: ${token}`,
        }
      })
      // .then((response) => console.log(response))
      .then((_) => toast.success('Tech Removida com sucesso!'))
    handleCloseModal()  
  }

  return (
    <>     
      <WrapperBtnModal onClick={handleOPenModal}>
        <HiOutlinePencilAlt/>
      </WrapperBtnModal>
      
      <Modal
        isOpen={modalOpen}  
        onRequestClose={handleCloseModal}
        className='Modal'
      >

        <SpanContainer className="header__modal">
          <h2> Tecnologia Detalhes </h2>
          <button onClick={handleCloseModal}> X </button>
        </SpanContainer>

        <ModalStyles onSubmit={handleSubmit(editTech)}>
          <label>
            Tech
            <input type="text" disabled value={title}/>
          </label>
          <label>
            Qual o seu nível atual ? 
            <select {...register('status')}>
              <option value="Iniciante" > Iniciante </option>
              <option value="Intermediário" > Intermediário </option>
              <option value="Avançado"> Avançado </option>
            </select>
          </label>
          <div className="container__btn">
            <ButtonTask type='submit'> Salvar Alterações </ButtonTask>
            <ButtonTask onClick={deleteTech} delete> Excluir </ButtonTask>
          </div>
        </ModalStyles>
      </Modal>
    </>
  )
}
export default ModalEditTech;
