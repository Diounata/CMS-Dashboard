import { FaRegClipboard, FaGlasses } from 'react-icons/fa';
import { IoIosCash } from 'react-icons/io';
import { BsFileEarmarkPlusFill, BsPeopleFill } from 'react-icons/bs';
import styles from './styles.module.scss';

export function Section() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.selected}>
        <FaRegClipboard /> Dashboard
      </div>
      <div>
        <BsFileEarmarkPlusFill /> Pedidos
      </div>
      <div>
        <FaGlasses />
        Produtos
      </div>
      <div>
        <BsPeopleFill />
        Clientes
      </div>
      <div>
        <IoIosCash /> Financeiro
      </div>
    </div>
  );
}
