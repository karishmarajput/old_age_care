import React from 'react';
import ResponsiveDrawer from './Sidebar.js';
import data from './profile.json';
export default function PersonDetails() {
  // console.log(data.profile[0]);
  data = data.profile[0];
  // console.log(data);
  return (
    <div>
      <div>
        <h1>{data.name}</h1>
        wadsnhjmashk w jkasjkajswef egrere
      </div>
    </div>
  );
}
