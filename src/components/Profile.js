import React from 'react';
import ResponsiveDrawer from './Sidebar.js';
import data from './profile.json';
export default function Profile() {
  data = data.profile[0];
  console.log(data.img)
  return (
    <div>
      <ResponsiveDrawer />
      <div>
        <div>
          <h1>{data.name}</h1>
        </div>
        <div>
          <image src={data.img} />
        </div>
        wadsnhjmashk w jkasjkajswef egrere
      </div>
    </div>
  );
}
