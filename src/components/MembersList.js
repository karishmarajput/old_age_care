import React, { Component, useState } from 'react';
import ResponsiveDrawer from './Sidebar.js';
import data from './profile.json';
import './membersList.css';

function RenderMember(member) {
  return (
    <tr>
      <td>{member.id}</td>
      <td>{member.name}</td>
      <td>{member.familyNumber}</td>
      <td>{member.dob} </td>
    </tr>
  );
}

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

  const [searchTerm, setSearchTerm] = useState('');
  const members = data.profile
    .filter((val) => {
      console.log('hello');
      console.log(val.name);
      console.log(searchTerm);
      if (searchTerm == '') {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((member) => {
      console.log(member);
      return (
        <div key={member.id}>
          <RenderMember member={member} />
        </div>
      );
    });
  return (
    <div className="membersList">
      <ResponsiveDrawer />
      <h1>Member's List</h1>

      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
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
