import React from 'react';
import { Table, Tag} from 'antd';
import { useRouter } from 'next/router';
import { HOST } from '../../constants';

const columns = [
  {
    title: 'Клиент',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Дата приёма',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Область исследования',
    dataIndex: 'type',
    key: 'type',
  },
  {
    sorter: (a, b) => a.price - b.price,
    title: 'Выплаты',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Статус',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = 'grey';
          if (tag === 'В ОБРАБОТКЕ') {
            color = 'blue';
          }
          if (tag === 'ЗАВЕРШЁН') {
            color = 'green';
          }
          if (tag === 'ОТМЕНЁН') {
            color = 'volcano';
          }
          if (tag === 'ТРЕБУЕТ ВНИМАНИЯ') {
            color = 'yellow';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    filters: [
      {
        text: 'В ОБРАБОТКЕ',
        value: 'В ОБРАБОТКЕ',
      },
      {
        text: 'ЗАВЕРШЁН',
        value: 'ЗАВЕРШЁН',
      },
      {
        text: 'ОТМЕНЁН',
        value: 'ОТМЕНЁН',
      },
      {
        text: 'ТРЕБУЕТ ВНИМАНИЯ',
        value: 'ТРЕБУЕТ ВНИМАНИЯ',
      },
    ],
    onFilter: (value, record) => record.tags.includes(value),
  },
];

const data = [
  {
    id: '86e6c7de-9e54-412e-8851-40331280d936',
    key: '1',
    title: 'Anna Brown Тестовый API',
    price: 5000,
    date: '04.04.2021',
    type: 'МРТ мягких тканей шеи',
    tags: ['В ОБРАБОТКЕ'],
  },
  {
    id: 200,
    key: '2',
    title: 'Jim Green',
    price: 1500,
    date: '03.03.2021',
    type: 'МРТ спины',
    tags: ['ОТМЕНЁН'],
  },
  {
    id: 300,
    key: '3',
    title: 'Boris Black',
    price: 5200,
    date: '02.02.2021',
    type: 'МРТ головы',
    tags: ['ЗАВЕРШЁН'],
  },
  {
    id: 400,
    key: '4',
    title: 'Kris Ivanova',
    price: 6400,
    date: '02.02.2021',
    type: 'МРТ головы',
    tags: ['В ОБРАБОТКЕ', 'ТРЕБУЕТ ВНИМАНИЯ'],
  },
];

const LeadsTable = ({ json, orders }) => {
  console.log('🚀 ~ file: index.jsx ~ line 118 ~ LeadsTable ~ json', json)
  console.log('🚀 ~ file: index.jsx ~ line 119 ~ LeadsTable ~ orders', orders)
  const router = useRouter();
  return (
    <div>
      <Table columns={columns} dataSource={orders} onRow={(record, rowIndex) => {
    return {
      onClick: event => {
        router.push(`/leads/${record._id}`)
      },
    };
  }} />
    </div>
  );
};

LeadsTable.getInitialProps = async (ctx) => {
  // const { id } = ctx.query;

  const res = await fetch(`${HOST}/api/v1/orders`)
  let json = null;
  try {
    json = await res.json();
  } catch(err) {
    console.log('сломался json');
    console.dir(err);
  }

  const orders = json.map(el => {
    el.tags = ['В РАБОТЕ'];
    el.title = 'Петров А. Н.';
    el.date = '22.08.2021';
    return el;
  })

  return { json, orders };
};

export default LeadsTable;