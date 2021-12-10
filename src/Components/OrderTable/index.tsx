import styles from './styles.module.scss';
import { OrderTableBody } from '../OrderTableBody';

export function OrderTable() {
  return (
    <div className={styles.container}>
      <h1>Últimos pedidos realizados</h1>

      <div className={styles.table}>
        <div className={styles.header}>
          <div>Nome</div>
          <div>E-mail</div>
          <div>Data</div>
          <div>Horário</div>
          <div>N° do pedido</div>
          <div>Método de Pagamento</div>
        </div>

        <OrderTableBody />
      </div>
    </div>
  );
}
