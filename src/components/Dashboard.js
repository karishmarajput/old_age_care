import React from 'react';
import ResponsiveDrawer from './Sidebar.js';
import './dashboard.css';
import { PieChart } from 'react-minimal-pie-chart';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <ResponsiveDrawer />
      <h1>Dashboard</h1>
      <div className="container">
        <div className="dashboard-div" id="div1">
          Number of : 21,200
        </div>
        <div className="dashboard-div" id="div2">
          Staff: 1,500
        </div>
        <div className="dashboard-div" id="div3">
          Staff: 1,500
        </div>
      </div>
      <div className="container">
        <div className="container1">
          <div className="dashboard-div" id="div4">
            <p>
              About Us:
              <br /> Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="container2">
          <PieChart
            data={[
              {
                title: 'One',
                value: 10,
                color: 'rgb(254,210,59)',
                paddingAngle: 90,
              },
              { title: 'Two', value: 15, color: '#EE714C' },
              { title: 'Three', value: 20, color: 'rgba(238, 141, 171, 1)' },
            ]}
          />
        </div>
      </div>
      <div id="app" />
    </div>
  );
}
