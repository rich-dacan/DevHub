/* eslint-disable react/prop-types */
import React from 'react';
import { SectionSuperior } from './styles'

const UserGreeting = ({name, module}) => {
  return (
    <SectionSuperior>
      <h1> Olá, {name}! </h1>
      <p> {module} </p>
    </SectionSuperior>
  )
}
export default UserGreeting