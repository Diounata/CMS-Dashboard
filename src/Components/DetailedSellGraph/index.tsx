import styles from './styles.module.scss';

export function DetailedSellGraph() {
  return (
    <div className={styles.container}>
      <div>
        <header>
          <h1>R$ 6.000,00</h1>
          <span>Relatório de Vendas Semanal</span>
        </header>

        <main>Graph</main>
      </div>
      <div>
        <header>
          <h1>R$ 27.000,00</h1>
          <span>Relatório de Vendas Mensal</span>
        </header>

        <main>Graph</main>
      </div>
    </div>
  );
}
