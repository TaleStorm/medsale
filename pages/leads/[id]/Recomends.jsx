import React, { useEffect } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';

const systemRecomendsTmp = [
  {
    _id: 777,
    title: 'МРТ руки систем рекоменд 777',
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

const MLRecomendsTmp = [
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

const statisticRecomendsTmp = [
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

export const Recomends = ({ orderId, products, setProducts, systemRecomends, MLRecomends, statisticRecomends }) => {
  console.log('🚀 ~ file: Recomends.jsx ~ line 95 ~ Recomends ~ products', products)
  console.log('🚀 ~ file: Recomends.jsx ~ line 95 ~ Recomends ~ systemRecomends', systemRecomends)
  console.log('🚀 ~ file: Recomends.jsx ~ line 95 ~ Recomends ~ MLRecomends', MLRecomends)
  console.log('🚀 ~ file: Recomends.jsx ~ line 95 ~ Recomends ~ statisticRecomends', statisticRecomends)

  const addRecomentInProducts = (product) => {
    setProducts(prevState => ([...prevState, {...product}]));
  }

  
  return (
    <div>
      <h3 className="recomends-title">Системные рекомендации:</h3>
      <ul className='recomendation system-recomendation'>
        {systemRecomends && products &&
          systemRecomends.filter((el) => !products.some(product => product._id === el._id) ).map((product) => (
            <li key={product._id}>
              <p className='rec-title'>{product.title}</p>
              <p className='rec-price'>Стоимость: {product.price} руб.</p>
              <PlusSquareOutlined
                style={{ fontSize: '18px', color: '#08c' }}
                onClick={() => addRecomentInProducts(product)}
              />
            </li>
          ))}
      </ul>
      {/* -------------  */}
      <h3 className="recomends-title">ML рекомендации:</h3>
      <ul className='recomendation system-recomendation'>
        {MLRecomends && products &&
          MLRecomends.filter((el) => !products.some(product => product._id === el._id) ).map((product) => (
            <li key={product._id}>
              <p className='rec-title'>{product.title}</p>
              <p className='rec-price'>Стоимость: {product.price} руб.</p>
              <PlusSquareOutlined
                style={{ fontSize: '18px', color: '#08c' }}
                onClick={() => addRecomentInProducts(product)}
              />
            </li>
          ))}
      </ul>
      {/* -------------  */}
      <h3 className="recomends-title">Статистические рекомендации:</h3>
      <ul className='recomendation system-recomendation'>
        {statisticRecomends && products &&
          statisticRecomends.filter((el) => !products.some(product => product._id === el._id) ).map((product) => (
            <li key={product._id}>
              <p className='rec-title'>{product.title}</p>
              <p className='rec-price'>Стоимость: {product.price} руб.</p>
              <PlusSquareOutlined
                style={{ fontSize: '18px', color: '#08c' }}
                onClick={() => addRecomentInProducts(product)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
