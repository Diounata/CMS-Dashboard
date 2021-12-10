import Head from 'next/head';

import { Menu } from '../Components/Menu';
import { Header } from '../Components/Header';
import { Cards } from '../Components/Cards';
import { SellGraph } from '../Components/SellGraph';
import { DetailedSellGraph } from '../Components/DetailedSellGraph';
import { OrderTable } from '../Components/OrderTable';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="container">
        <Menu />

        <div>
          <Header />
          <Cards />
          <SellGraph />
          <DetailedSellGraph />
          <OrderTable />
        </div>
      </div>
    </>
  );
}
