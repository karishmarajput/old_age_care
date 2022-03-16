import React from 'react';
import ResponsiveDrawer from './Sidebar.js';
import data from './profile.json';
import './profile.css';
import DownloadIcon from '@mui/icons-material/Download';
export default function Profile() {
  data = data.profile[0];
  const medicineIntake = data.medicineIntake.map((medicineIntake) => {
    return <li>{medicineIntake.name}</li>;
  });
  const allergies = data.allergies.map((allergies) => {
    return (
      <details>
        <summary>{allergies.name}</summary>
        <p>{allergies.desc}</p>
      </details>
    );
  });
  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image.png'); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const prescription = data.prescription.map((prescription) => {
    return (
      <tr>
        <td>{prescription.date}</td>
        <td>{prescription.doctorName} </td>
        <td>
          <a href={prescription.img} download onClick={(e) => download(e)}>
            <DownloadIcon /> Download
          </a>
        </td>
      </tr>
    );
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
            Prescription:{' '}
            <table>
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Doctor's Name</th>
                  <th>Prescription</th>
                </tr>
                {prescription}
              </tbody>
            </table>
            <br />
            Allergies: {allergies}
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
            Doctor's Comment: {data.doctorsComment}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
