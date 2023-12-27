import React, { useState } from 'react';

const HoverEffectItem = ({children, className}) => {
    const [containerStyles, setContainerStyles] = useState({
        border: '1px solid',
        boxShadow: 'none',
        transition: 'box-shadow 0.3s ease',
        background: "transparent"
      });
    
      const handleMouseEnter = () => {
        setContainerStyles({
          ...containerStyles,
          boxShadow: '0 0 5px rgba(255, 255, 255, .5)',
          background: "#fff",
          color: "#000",
          borderColor: "#fff"
        });
      };
    
      const handleMouseLeave = () => {
        setContainerStyles({
          ...containerStyles,
          boxShadow: 'none',
          background: "transparent",
          color: "#fff",
        });
      };
    
      return (
        <div
          className={`border py-5 ${className}`}
          style={containerStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      );
};

export default HoverEffectItem;