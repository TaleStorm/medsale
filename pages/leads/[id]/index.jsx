import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { Recomends } from './Recomends';
import { HOST } from '../../../constants';

const { Panel } = Collapse;

const data = {
  user: {
    name: 'Иванов Иван',
  },
  products: [
    {
      _id: 333,
      title: 'МРТ головы тестовый API',
      // image: String,
      description: 'Длинное описание товара',
      price: 100,
      preparation: 'Длинное описание подготовки к процедуре', // Рекомендации клиенту для подготовки к процедуре
      // recomends,
    },
    {
      _id: 444,
      title: 'МРТ руки',
      // image: String,
      description: 'Длинное описание товара',
      price: 200,
      preparation: 'Длинное описание подготовки к процедуре', // Рекомендации клиенту для подготовки к процедуре
      // recomends,
    },
    {
      _id: 555,
      title: 'МРТ спины',
      // image: String,
      description: 'Длинное описание товара',
      price: 300,
      preparation: 'Длинное описание подготовки к процедуре', // Рекомендации клиенту для подготовки к процедуре
      // recomends,
    },
  ],
};

const LeadDetail = ({ orderId, json, productsData }) => {
  console.log('🚀 ~ file: index.jsx ~ line 45 ~ LeadDetail ~ json', json)
  console.log('🚀 ~ file: index.jsx ~ line 45 ~ LeadDetail ~ productsData', productsData)
  const { user } = data || {};
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className='bg-wrapper'>
      <div className='order-title-wrapper'>
        <h2 className='order-title'>Заказ {orderId}</h2>
        <p>
          Клиент: <b>{user?.name}</b>
        </p>
      </div>
      <div className='order-content-wrapper'>
        <div className='order-content-left'>
          <div className='products'>
            <p className="products-title">Продукты:</p>
            {products &&
              products.map(
                ({ id, title, description, price, preparation }) => (
                  <div key={id} className='product'>
                    <div className="product-title">
                      <span>{title}</span>
                    </div>
                    <Collapse defaultActiveKey={['1']}>
                      <Panel header='Описание процедуры' key='1'>
                        <p>{description}</p>
                      </Panel>
                      <Panel header='Подготовка к процедуре' key='2'>
                        <p>{preparation}</p>
                      </Panel>
                    </Collapse>
                    <p className="product-price">Стоимость: <b>{price} руб.</b></p>
                  </div>
                )
              )}
          </div>
          <div className='total'>
            <p className="total-cost">
              Итого: <b>{products?.reduce((acc, cur) => acc + cur.price, 0)} руб.</b>
            </p>
          </div>
        </div>
        <div className='order-content-right'>
          {orderId && <Recomends orderId={orderId} products={products} setProducts={setProducts} />}
        </div>
      </div>
    </div>
  );
};

LeadDetail.getInitialProps = async (ctx) => {
  const { id } = ctx.query;

  const res = await fetch(`${HOST}/api/v1/getUPO/?model=order&id=${id}`)
  const json = await res.json();
  const productsIds = json?.products?.id;
  const products = [];

  for (const productId of productsIds) {
    const productResponse = await fetch(`${HOST}/api/v1/getUPO/?model=product&id=${productId}`);
    const productJson = await productResponse.json();
    if (productJson?.price) productJson.price = Number(productJson.price);
    products.push(productJson);
  }

  return { orderId: id, json, productsData: products };
};

export default LeadDetail;
