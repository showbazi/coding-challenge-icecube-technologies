import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdownContainer" onClick={() => setIsOpen(!isOpen)}>
      <div className="dropdownHeader">
        {" "}
        <p>{options.title}</p>
        {!isOpen ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      <div className="dropdown" style={{ display: isOpen ? "flex" : "none" }}>
        <ul>
          {options &&
            options.items &&
            options.items.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
