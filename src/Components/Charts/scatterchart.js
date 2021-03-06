
import { Legend, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ResponsiveContainer } from 'recharts';

export default function ScatterChartComp(props) {


  return (
    <ResponsiveContainer height={400}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20, }}>
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="city" />
        <YAxis
          type="number"
          dataKey="number"
          name="number of events"
          allowDecimals={false} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />

        <Scatter data={props.data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer >
  );
}
