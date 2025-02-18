import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const Piechart = props => {
  const {matches} = props
  let wons = 0
  let losts = 0
  let draws = 0
  const vals = matches.map(each => {
    if (each.matchStatus === 'Won') {
      wons += 1
    } else if (each.matchStatus === 'Lost') {
      losts += 1
    } else {
      draws += 1
    }
    return ''
  })
  const data = [
    {
      name: 'Won',
      count: wons,
    },
    {name: 'Lost', count: losts},
    {name: 'Draw', count: draws},
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Won" fill="#fecba6" />
          <Cell name="Lost" fill="#b3d23f" />
          <Cell name="Draw" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
export default Piechart
