import React from 'react';
import ResponsiveDrawer from './Sidebar.js';
import data from './profile.json';
import './profile.css';
export default function Profile() {
  data = data.profile[0];
  console.log(data.img);
  return (
    <div>
      <ResponsiveDrawer />
      <div className="profile-div">
        <div className="profile-main-div">
          <div className="profile-main-div-name">
            <h1>{data.name}</h1>
          </div>
          <div className="profile-main-div-image">
            <img
              src={data.img}
              width="250"
              width="250"
              className="profileImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
