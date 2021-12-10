import { FaUser, FaPencilAlt } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';

export function OrderTableBody() {
  const order = [1, 2, 3, 4, 5];

  return (
    <>
      {order.map((_, key) => (
        <div key={key}>
          <div>
            <FaUser /> Leticia exemplo
          </div>
          <div>leticia@sipdigital.com</div>
          <div>30/07/2021</div>
          <div>15:49</div>
          <div>12466</div>
          <div>Cartão de crédito - Visa</div>
          <div>
            <FaPencilAlt title='Editar' />
            <GrDocumentText title='Visualizar' />
          </div>
        </div>
      ))}
    </>
  );
}
