import React from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';

const systemRecomends = [
  {
    _id: 777,
    title: 'МРТ руки систем рекоменд',
    // image: String,
    description: 'Длинное описание товара',
    price: 200,
    preparation: 'Длинное описание подготовки к процедуре', // Рекомендации клиенту для подготовки к процедуре
    // recomends,
  },
  {
    _id: 888,
    title: 'МРТ спины систем рекоменд',
    // image: String,
    description: 'Длинное описание товара',
    price: 300,
    preparation: 'Длинное описание подготовки к процедуре', // Рекомендации клиенту для подготовки к процедуре
    // recomends,
  },
  {
    _id: 333,
    title: 'МРТ спины систем рекоменд 111',
    // image: String,
    description: 'Длинное описание товара',
    price: 300,
    preparation: 'Длинное описание подготовки к процедуре', // Рекомендации клиенту для подготовки к процедуре
    // recomends,
  },
];

export const Recomends = ({ orderId, products, setProducts }) => {
  return (
    <div>
      <ul className='recomendation system-recomendation'>
        {systemRecomends && products &&
          systemRecomends.filter((el) => !products.some(product => product._id === el._id) ).map(({ _id, title, price }) => (
            <li key={_id}>
              <p className='rec-title'>{title}</p>
              <p className='rec-price'>Стоимость: {price} руб.</p>
              <PlusSquareOutlined
                style={{ fontSize: '13px', color: '#08c' }}
                onClick={() => setCurrentRecId(_id)}
              />
            </li>
          ))}
      </ul>
      // system // ML // statistic
    </div>
  );
};
