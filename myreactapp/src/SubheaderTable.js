import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const SubheaderTable = () => {
  return (
    <table className="subhead">
      <tbody>
        <tr>
          <td ><Link to="/Home" className="e1">Home</Link></td>
          <td ><Link to="/plays" className="e2">Plays</Link></td>
          <td ><Link to="/opera" className="e3">Opera</Link></td>
          <td ><Link to="/concert" className="e4">Concert</Link></td>
          <td ><Link to="/comedy" className="e5">Comedy</Link></td>
          <td ><Link to="/circus" className="e6">Circus</Link></td>
          
        </tr>
      </tbody>
    </table>
  );
};

export default SubheaderTable;