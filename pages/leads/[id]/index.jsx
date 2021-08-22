import React from 'react';
import { Collapse } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const data = {
  user: {
    name: 'Иванов Иван',
  },
  products: [
    {
      _id: 333,
      title: 'МРТ головы',
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

const LeadDetail = ({ id }) => {
  const { user, products } = data || {};

  return (
    <div className='bg-wrapper'>
      <div className='order-title-wrapper'>
        <h2 className='order-title'>Заказ {id}</h2>
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
                      <PlusSquareOutlined
                        style={{ fontSize: '26px', color: '#08c' }}
                        onClick={() => {console.log(_id);}}
                      />
                    </div>
                    <Collapse>
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
        <div className='order-content-right'></div>
      </div>
    </div>
  );
};

LeadDetail.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  // return { stars: json.stargazers_count }
  return { id };
};

export default LeadDetail;
