import React, { useState } from 'react';
import Modal from 'react-modal';

import Login from './Login';

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
      {modalAberto ?
        (
          <button onClick={fecharModal} className='btn__login'><CgProfile /></button>
        ) : (
          <button onClick={abrirModal} className='btn__login'><CgProfile /></button>
        )
      }

      <Modal className="Modal" overlayClassName="Overlay" isOpen={modalAberto}>
        <Login />
      </Modal>
    </div>
  );
};