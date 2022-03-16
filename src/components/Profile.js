import React from 'react';
import ResponsiveDrawer from './Sidebar.js';
import data from './profile.json';
import './profile.css';
export default function Profile() {
  data = data.profile[0];
  console.log(data.img);
  const medicineIntake = data.medicineIntake.map((medicineIntake) => {
    return <li>{medicineIntake.name}</li>;
  });
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
        <div className="profile-main">
          <div className="profile-main-desc">
            Medicine Intake:<ul> {medicineIntake} </ul>
            Prescription:
          </div>
          <div className="profile-main-info">
            Name: {data.name}
            <br />
            D.O.B: {data.dob}
            <br />
            Family Number: {data.familyNumber}
            <br />
            bloodGroup: {data.bloodGroup}
            <br />
            doctorsComment: {data.doctorsComment}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
