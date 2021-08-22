const data = [
    {
      id: 500,
      key: '5',
      title: 'Jane Doe',
      price: 4000,
      date: '25.04.2021',
      type: 'Общее МРТ',
      tags: ['В ОБРАБОТКЕ'],
    },
    {
      id: 600,
      key: '6',
      title: 'John Doe',
      price: 1000,
      date: '20.03.2021',
      type: 'Консультация',
      tags: ['ЗАВЕРШЁН'],
    },
    {
      id: 700,
      key: '3',
      title: 'Boris Razor',
      price: 3000,
      date: '15.02.2021',
      type: 'МРТ грудной клетки',
      tags: ['В ОБРАБОТКЕ', 'ТРЕБУЕТ ВНИМАНИЯ'],
    },
  ]

export default async (req, res) => {
  try {
    if (req.method === "GET") {
        const count = Math.floor(Math.random() * data.length + 1)
        const leads = data.filter(function(item, i){
            if(i < count){
                return item
            }
        })
        res.status(200).json({ status: true, data: { count, leads } })
    } else {
      res.status(200).json({ status: false, data: { message: "method does not exist" } })
    }
  } catch (error) {
    res.status(200).json({ status: false, data: { message: error.message } })
  }
}
