import React, { useState } from 'react';
import Modal from 'react-modal';

import Login from '../Components/Login';

import { CgProfile } from "react-icons/cg";

export default function ModalLogin() {
  const [modalAberto, setModalAberto] = useState(false);

  function abrirModal() {
    setModalAberto(true);
  };

  function fecharModal() {
    setModalAberto(false)
  }

  return (
    <div>
      <button onClick={abrirModal} className='btn__login'><CgProfile /></button>

      <Modal className="Modal" overlayClassName="Overlay" isOpen={modalAberto}>
        <Login />
        <button onClick={fecharModal} className='btn__fecharLogin'>Fechar Modal</button>
      </Modal>
    </div>
  );
};