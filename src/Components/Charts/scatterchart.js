import React, { Component } from 'react';
import { Legend, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default class ScatterChartComp extends Component {

  render() {
    return (

      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20, }}>
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="city" />
        <YAxis
          type="number"
          dataKey="number"
          name="number of events"
          allowDecimals={false} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend verticalAlign="top" height={36} />
        <Scatter data={this.props.data} fill="#8884d8" />
      </ScatterChart>

    );
  }
}