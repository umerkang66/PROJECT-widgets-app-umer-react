import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, propLabel }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  // const [color, setColor] = useState(selected.value);
  const ref = useRef();

  // By giving the emptry array as the second argument, we will tell it to render only one time when the component is rendered
  useEffect(() => {
    // Using vanilla JavaScript here, document eventListners
    // First eventListners will be called that are created by addEventListners then the react one will be called
    // contains method is present in all DOM Element to check if one dom element is inside another dom element
    const onTargetClick = function (e) {
      // Both solutions do the same thing
      // if (ref.current && ref.current.contains(e.target)) return;
      if (e.target !== this) return;
      setOpenDropdown(false);
    };

    const body = document.querySelector('body');
    body.addEventListener('click', onTargetClick, { capture: true });

    return () => {
      body.removeEventListener('click', onTargetClick, { capture: true });
    };
  }, []);

  const renderedOptions = options.map(option => {
    if (selected.value === option.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="form" className="label">
          <h3>{propLabel}</h3>
        </label>
        <div
          onClick={e => {
            setOpenDropdown(!openDropdown);
          }}
          className={`ui selection dropdown ${
            openDropdown ? 'visible active' : ''
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${openDropdown ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      {/* <h2 style={{ color: color }}>This is text whose color will be changed</h2> */}
    </div>
  );
};

export default Dropdown;
