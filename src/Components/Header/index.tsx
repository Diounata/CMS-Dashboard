import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.inputContainer}>
        <label>
          <FaSearch />
          <input type="text" min="3" max="100" placeholder="Pesquisar" />
        </label>
      </div>

      <div>
        <div className={styles.bellContainer}>
          <div></div>
          <FaBell />
        </div>

        <FaUser />
      </div>
    </header>
  );
}
