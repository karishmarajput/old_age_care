import React from 'react';
import ResponsiveDrawer from './Sidebar.js';
import data from './profile.json';
import './membersList.css';
export default function MembersList() {
  const member = data.profile.map((member) => {
    return (
      <tr>
        <td>{member.id}</td>
        <td>{member.name}</td>
        <td>{member.familyNumber}</td>
        <td>{member.dob} </td>
      </tr>
    );
  });
  return (
    <div className="membersList">
      <ResponsiveDrawer />
      <h1>Member's List</h1>
      <table>
        <tbody>
          <tr>
            <th>Sr. no</th>
            <th>Name</th>
            <th>Family Number</th>
            <th>D.O.B</th>
          </tr>
          {member}
        </tbody>
      </table>
    </div>
  );
}
