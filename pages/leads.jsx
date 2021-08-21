import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag} from 'antd';

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
    onFilter: (value, record) => record.tags.indexOf(value) === 0,
  },
];

const data = [
  {
    id: 100,
    key: '1',
    title: 'Anna Brown',
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

const LeadsTable = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} locale="ru_RU" onRow={(record, rowIndex) => {
    return {
      onClick: event => {
        console.log('!!! click !!!');
        console.log(record);
        console.log(rowIndex);
      },
    };
  }} />
    </div>
  );
};

export default LeadsTable;