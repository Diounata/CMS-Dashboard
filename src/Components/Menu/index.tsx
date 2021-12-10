import { RiLogoutCircleRLine } from 'react-icons/ri';
import styles from './styles.module.scss';

import { Section } from '../MenuSection';

export function Menu() {
  return (
    <nav className={styles.navContainer}>
      <div>
        <h1>Logo</h1>

        <Section />
      </div>

      <button>
        <RiLogoutCircleRLine /> Sair
      </button>
    </nav>
  );
}
