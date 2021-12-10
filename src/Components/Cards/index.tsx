import { FaStoreAlt, FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';
import styles from './styles.module.scss';

export function Cards() {
  return (
    <div className={styles.cardsContainer}>
      <div>
        <FaStoreAlt />
        <p>
          <span>Unidades Registradas</span>
          <span>1</span>
        </p>
      </div>
      <div>
        <FaUsers />
        <p>
          <span>Novos Clientes</span>
          <span>104</span>
        </p>
      </div>
      <div>
        <FaMoneyBillWave />
        <p>
          <span>Vendas Realizadas</span>
          <span>7270</span>
        </p>
      </div>

      <div>
        <BsBank2 />
        <p>
          <span>Lucro Liquido (geral)</span>
          <span>R$ 427.300,50</span>
        </p>
      </div>
    </div>
  );
}
