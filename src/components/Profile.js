import React from 'react';
import ResponsiveDrawer from './Sidebar.js';
import data from './profile.json';
export default function Profile() {
  console.log(data.profile[0]);
  data = data.profile[0];
  console.log(data);
  return (
    <div>
      <ResponsiveDrawer />
    </div>
  );
}
