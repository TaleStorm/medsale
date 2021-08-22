import React, { useEffect, useState, useContext } from "react"
import { Table, Tag } from "antd"
import { useRouter } from "next/router"
import HeaderContext from "../../components/context/headerContex"
import Link from "next/link"

const columns = [
  {
    title: "Клиент",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Дата приёма",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Область исследования",
    dataIndex: "type",
    key: "type",
  },
  {
    sorter: (a, b) => a.price - b.price,
    title: "Выплаты",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Статус",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = "grey"
          if (tag === "В ОБРАБОТКЕ") {
            color = "blue"
          }
          if (tag === "ЗАВЕРШЁН") {
            color = "green"
          }
          if (tag === "ОТМЕНЁН") {
            color = "volcano"
          }
          if (tag === "ТРЕБУЕТ ВНИМАНИЯ") {
            color = "yellow"
          }
          if (tag === "НОВЫЙ") {
            color = "pink"
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
    filters: [
      {
        text: "В ОБРАБОТКЕ",
        value: "В ОБРАБОТКЕ",
      },
      {
        text: "ЗАВЕРШЁН",
        value: "ЗАВЕРШЁН",
      },
      {
        text: "ОТМЕНЁН",
        value: "ОТМЕНЁН",
      },
      {
        text: "ТРЕБУЕТ ВНИМАНИЯ",
        value: "ТРЕБУЕТ ВНИМАНИЯ",
      },
      {
        text: "НОВЫЙ",
        value: "НОВЫЙ",
      },
    ],
    onFilter: (value, record) => record.tags.includes(value),
  },
]

const data = [
  {
    id: '86e6c7de-9e54-412e-8851-40331280d936',
    key: "1",
    title: 'Anna Brown Тестовый API',
    price: 5000,
    date: "04.04.2021",
    type: "МРТ мягких тканей шеи",
    tags: ["В ОБРАБОТКЕ"],
  },
  {
    id: 200,
    key: "2",
    title: "Jim Green",
    price: 1500,
    date: "03.03.2021",
    type: "МРТ спины",
    tags: ["ОТМЕНЁН"],
  },
  {
    id: 300,
    key: "3",
    title: "Boris Black",
    price: 5200,
    date: "02.02.2021",
    type: "МРТ головы",
    tags: ["ЗАВЕРШЁН"],
  },
  {
    id: 400,
    key: "4",
    title: "Kris Ivanova",
    price: 6400,
    date: "02.02.2021",
    type: "МРТ головы",
    tags: ["В ОБРАБОТКЕ", "ТРЕБУЕТ ВНИМАНИЯ"],
  },
]

const LeadsTable = ({ sort = "" }) => {
  const router = useRouter()
  const { newLeads } = useContext(HeaderContext)
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    setDataSource([...newLeads, ...data])
  }, [newLeads])

  useEffect(() => {
    if (sort === "new") {
      setDataSource([...newLeads])
    } else {
      setDataSource([...newLeads, ...data])
    }
  }, [sort])

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              router.push(`/leads/${record.id}`)
            },
          }
        }}
      />
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const { sort } = ctx.query

  if (sort !== undefined) {
    return { props: { sort } }
  } else {
    return { props: {} }
  }
}

export default LeadsTable
