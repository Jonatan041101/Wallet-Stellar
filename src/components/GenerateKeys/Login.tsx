import React from 'react';
import Modal from '../Modal';
import Button from '@/atoms/Button';
import Warning from '@/molecules/Warning';

interface Props {
  closeModal: () => void;
}
const list = [
  `Siempre asegúrese de que el dominio que está utilizando para acceder
al Visor de cuentas sea <a href="https://accountviewer.stellar.org" target='_blank'>https://accountviewer.stellar.org</a> antes de
ingresar sus claves. Los estafadores pueden replicar este sitio web en
un dominio diferente para robar sus claves.`,
  `¿Sabía que los administradores de contraseñas son una alternativa más
segura que copiar y pegar sus claves secretas?`,
  `Los administradores de contraseñas completarán automáticamente el
campo de clave secreta solo si detectan que estás en el dominio
correcto. También reducen el riesgo al eliminar la necesidad de copiar
y pegar su clave secreta.`,
];
export default function Login({ closeModal }: Props) {
  return (
    <Modal closeModal={closeModal} title="Conectar con una clave secreta">
      <Warning classWarning="warning__violet">
        <ul className="list">
          <li className="list__li">
            Siempre asegúrese de que el dominio que está utilizando para acceder
            al Visor de cuentas sea{' '}
            <a
              href="https://accountviewer.stellar.org"
              className="list__a"
              target="_blank"
            >
              https://accountviewer.stellar.org
            </a>{' '}
            antes de ingresar sus claves. Los estafadores pueden replicar este
            sitio web en un dominio diferente para robar sus claves.
          </li>

          <li className="list__li list__question">
            ¿Sabía que los administradores de contraseñas son una alternativa
            más segura que copiar y pegar sus claves secretas?
          </li>
          <li className="list__li">
            Los administradores de contraseñas completarán automáticamente el
            campo de clave secreta solo si detectan que estás en el dominio
            correcto. También reducen el riesgo al eliminar la necesidad de
            copiar y pegar su clave secreta.
          </li>
        </ul>
      </Warning>
      {/* Este input esta en confirm */}
      <label className="input__label">TU CLAVE SECRETA</label>
      <input
        className="input__input"
        placeholder="Comienza con S, ejemplo: SCHK…ZLJK"
        type="password"
      />
      <div className="modal__buttons">
        <Button
          text="Conectar"
          classNameBtn="button__complete"
          handleClick={() => {}}
        />
      </div>
    </Modal>
  );
}