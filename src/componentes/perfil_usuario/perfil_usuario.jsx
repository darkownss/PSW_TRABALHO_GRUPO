import React, { useEffect, useState } from 'react';
import { addUserServer, emailExistServer, fetchUser } from '../../redux/user/UserSlice';
import { useDispatch, useSelector } from 'react-redux';


function Perfil_Usuario() {
    const { currentUser } = useSelector((rootReducer) => rootReducer.userSlice) || {};
    const Nome = currentUser?.nome || null;
    const email = currentUser?.email || null;
    const senha = currentUser?.senha || null;
  return (
    <>
    <div>
        <h1>Perfil do Usuário</h1>
        <span>{Nome}</span>
        <span>{email}</span>
        <span>{senha}</span>  
    </div>
    
    </>
  )
};
export default Perfil_Usuario;