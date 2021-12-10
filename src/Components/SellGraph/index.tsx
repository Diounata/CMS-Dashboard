import styles from './styles.module.scss';

export function SellGraph() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Relatório de Vendas</h1>

        <div>
          <div>Vendas de 2020</div>
          <div>Vendas de 2021</div>
        </div>
      </header>

      <main>Graph</main>
    </div>
  );
}
