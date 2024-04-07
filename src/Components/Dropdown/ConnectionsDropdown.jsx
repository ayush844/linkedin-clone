import React, { useState } from 'react';
import './ConnectionsDropdown.css'

const ConnectionsDropdown = () => {

  const options = ['Recently added', 'Oldest Connections', 'Alphabatically (A - Z)'];

  const defaultValue = options[0];


  const [selectedValue, setSelectedValue] = useState(defaultValue);

  // Function to handle value change
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <select id="dropdown" value={selectedValue} onChange={handleSelectChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConnectionsDropdown;
