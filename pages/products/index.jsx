import React, { useEffect, useState, useContext } from "react"
import { Table, Tag } from "antd"
import { useRouter } from "next/router"
import { HOST } from '../../constants';


const columns = [
  {
    title: "Название",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Описание",
    dataIndex: "description",
    key: "desction",
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Подготовкак к процедуре",
    key: "preparation",
    dataIndex: "preparation",
  },

  
]

// const data = [
//   {
//     id: 100,
//     key: "1",
//     title: "Anna Brown",
//     price: 5000,
//     date: "04.04.2021",
//     type: "МРТ мягких тканей шеи",
//     tags: ["В ОБРАБОТКЕ"],
//   },
//   {
//     id: 200,
//     key: "2",
//     title: "Jim Green",
//     price: 1500,
//     date: "03.03.2021",
//     type: "МРТ спины",
//     tags: ["ОТМЕНЁН"],
//   },
//   {
//     id: 300,
//     key: "3",
//     title: "Boris Black",
//     price: 5200,
//     date: "02.02.2021",
//     type: "МРТ головы",
//     tags: ["ЗАВЕРШЁН"],
//   },
//   {
//     id: 400,
//     key: "4",
//     title: "Kris Ivanova",
//     price: 6400,
//     date: "02.02.2021",
//     type: "МРТ головы",
//     tags: ["В ОБРАБОТКЕ", "ТРЕБУЕТ ВНИМАНИЯ"],
//   },
// ]

export default function Products({data = []}) {
  
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record, rowIndex) => {}}
      />
    </div>
  )
  }

  export const getServerSideProps = async (ctx) =>{
    const res = await fetch(`${HOST}/api/v1/products`)
    const finalRes = await res.json()
    let tmp = []

    for(let i =0; i<finalRes.length; i++){
      tmp.push({
        title: finalRes[i].title,
        description: finalRes[i].description,
        price: finalRes[i].price,
        preparation: finalRes[i].preparation
      })
    }

    return { props: {data: tmp} }
  }


