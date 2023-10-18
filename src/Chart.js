import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

function Chart() {
  const data = [
    {
      name: 'jan',
      uv: 4000,
      earn: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      earn: 500,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      earn: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      earn: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      earn: 4800,
      amt: 2181,
    },
  ];



  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="container-fluid ">
      <div className="row g-3 my-2">
        <div className="col-md-12 col-lg-7 col-sm-12 bg-white rounded border  ">
          <h5 className="text-center ">Overview Monthly Earning</h5>
          <ResponsiveContainer width="70%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 20 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="earn" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
          </ResponsiveContainer>

        </div>
        <div className="col-md-12 col-lg-5 col-sm-12  bg-white text-left border rounded ">
          <h5 className="text-center">Customers</h5>
          <h6>Customers buy Product</h6>
          <PieChart width={800} height={350}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="earn"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Chart;
