import React from 'react';
import "./Settings.modal.css";
const Settings = () => {
    return (
      <div className="settings">
      <label>Shop filter</label>
    <input type="radio" />
    <label>Tech filter</label>
    <input type="radio" value="Shop filter"/>
    <label>Rest filter</label>
    <input type="radio" value="Shop filter"/>
      </div>
    );
  };

export default Settings