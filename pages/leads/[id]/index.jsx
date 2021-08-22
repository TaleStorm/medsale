import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { Recomends } from './Recomends';
import { HOST } from '../../../constants';

const { Panel } = Collapse;

const tmpData = {
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

const LeadDetail = ({ orderId, json, productsData, systemRecomends, MLRecomends, statisticRecomends }) => {
  console.log('🚀 ~ file: index.jsx ~ line 45 ~ LeadDetail ~ json', json)
  console.log('🚀 ~ file: index.jsx ~ line 45 ~ LeadDetail ~ productsData', productsData)
  console.log('🚀 ~ file: index.jsx ~ line 45 ~ LeadDetail ~ systemRecomends', systemRecomends)
  console.log('🚀 ~ file: index.jsx ~ line 45 ~ LeadDetail ~ MLRecomends', MLRecomends)
  console.log('🚀 ~ file: index.jsx ~ line 45 ~ LeadDetail ~ statisticRecomends', statisticRecomends)
  
  const { user } = tmpData || {};
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
      return;
    }
    setProducts(tmpData.products);
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
                ({ _id, title, description, price, preparation }) => (
                  <div key={_id} className='product'>
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
          {orderId && <Recomends orderId={orderId} products={products} setProducts={setProducts} systemRecomends={systemRecomends} MLRecomends={MLRecomends} statisticRecomends={statisticRecomends} />}
        </div>
      </div>
    </div>
  );
};

const fetchProductData = async (productsIds) => {
  if (!productsIds) return console.log('!!! fetchProductData -> productsIds = ', productsIds);
  const products = [];

  for (const productId of productsIds) {
    const productResponse = await fetch(`${HOST}/api/v1/getUPO/?model=product&id=${productId}`);
    const productJson = await productResponse.json();
    if (productJson?.price) productJson.price = Number(productJson.price);
    products.push(productJson);
  }

  return products;
}



LeadDetail.getInitialProps = async (ctx) => {
  const { id } = ctx.query;

  const res = await fetch(`${HOST}/api/v1/getUPO/?model=order&id=${id}`)
  let json = null;
  try {
    json = await res.json();
  } catch(err) {
    console.log('сломался json');
    console.dir(err);
  }

  const productsIds = json?.products?.id;
  const products = await fetchProductData(productsIds);
  

  const systemRecomendsIds = json?.systemRecomends?.id;
  const systemRecomends = await fetchProductData(systemRecomendsIds);

  const MLRecomendsIds = json?.MLRecomends?.id;
  const MLRecomends = await fetchProductData(MLRecomendsIds);

  const statisticRecomendsIds = json?.statisticRecomends?.id;
  const statisticRecomends = await fetchProductData(statisticRecomendsIds);

  return { orderId: id, json, productsData: products, systemRecomends, MLRecomends, statisticRecomends };
};

export default LeadDetail;
