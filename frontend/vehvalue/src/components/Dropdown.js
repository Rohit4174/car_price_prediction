
import React,{useState} from 'react';

function Dropdown({ label, options, selected, onSelect }) {
 

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{label}</label>
      <select
        className="dropdown-select"
        value={selected}
        onChange={ (e) =>
    onSelect(e.target.value)}
      >
        <option value="">-- Select --</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
