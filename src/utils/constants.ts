export type MessageSuccessWithVariable =
  | `La cuenta ha sido activada hash:${string}`
  | `Se ha enviado ${string} a ${string}`;
export enum MessageSucces {
  COPIED_TO_CLIPBOARD = 'Copiado al portapapeles',
  LOAD_BALANCE = 'Su saldo ha sido actualizado',
  HISTORY_UPDATE = 'Historial actualizado',
}
export enum MessageError {
  READ_CAREFULLY = 'Lee con atención',
  SAVE_KEYS = 'Guarde sus llaves',
  ERROR_SECRET_KEY = 'La llave secreta que ha ingresado es incorrecta',
  ERROR_PUBLIC_KEY = 'La llave publica que ha ingresado es incorrecta',
  ERROR_COPYING = 'Ocurrio un error al copiar al portapapeles ',
  INVALID_SECRET_KEY = 'La llave secreta ingresada no pertenece a una cuenta',
  ERROR_ACTIVATE_ACCOUNT = 'Ocurrio un error al querer activar su cuenta',
  INVALID_NUMBER = 'El valor ingresado no es numero',
  ERROR_IN_TRANSACTION = 'Ocurrio un error en la transacción',
  ERROR_SUBMIT = 'Error en el envio de la transacción',
  LOAD_ERROR = 'Error de carga',
  ERROR = 'Ocurrio un error',
  NOT_TRANSACTIONS = 'No tiene un hitorial de transacciones',
}
export enum ERROR_CONECTION {
  STRING_IS_INVALID = 'invalid encoded string',
}
export enum MessageLoad {
  TRANSACTION = 'Espere un momento a que se termine la transacción',
  ACTIVATE_ACOUNT = 'Esperando activación de la cuenta',
  WAIT_A_MOMENT = 'Espere un momento',
}
export const FUNDING_AMOUNT: string = '+10000.0000000';
export const FUNDING_NAME: string = 'Fondeo';
export const NO_PUBLIC_KEY_LENGTH = 3;
export const NO_ASSET = 'XLM';
