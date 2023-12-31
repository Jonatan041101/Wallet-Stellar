'use client';
import useTransaction from '@/hooks/useTransaction';
import React from 'react';
import RowTransaction from './RowTransaction';
import Button from '@/atoms/Button';
import { MessageLoad, MessageSucces } from '@/utils/constants';
import { succesLoaderMsg, succesMsgAsync } from '@/utils/toastMsg';
import { useBearStore } from '@/store/store';

export default function Transactions() {
  const { transactions, handleGetTransactions } = useTransaction();
  const { publicKey } = useBearStore(({ account }) => ({
    publicKey: account.publicKey,
  }));
  const handleReloadTransactions = async () => {
    try {
      const notificationId = succesLoaderMsg(MessageLoad.WAIT_A_MOMENT);
      await handleGetTransactions(false, notificationId);
      succesMsgAsync(notificationId, MessageSucces.HISTORY_UPDATE);
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <div className="transaction">
      <div className="transaction__title">
        <h3 className="transaction__h3">Historial de Pagos</h3>
        <Button
          classNameBtn="button__complete"
          handleClick={handleReloadTransactions}
          text=""
          id="reload-history"
          icon="Reload"
        />
      </div>
      <table className="transaction__table">
        <thead className="transaction__thead">
          <tr className="transaction__tr">
            <th className="transaction__th">Fecha y Hora</th>
            <th className="transaction__th">Dirección</th>
            <th className="transaction__th">Cantidad</th>
            <th className="transaction__th">Id de la Operación</th>
          </tr>
        </thead>
        {transactions.length > 0 ? (
          <tbody>
            {transactions.map((transaction) => (
              <RowTransaction
                transaction={transaction}
                key={transaction.id}
                publicKey={publicKey}
              />
            ))}
          </tbody>
        ) : (
          <div className="transaction__none">
            Todavia no se han realizado transacciones
          </div>
        )}
      </table>
    </div>
  );
}
