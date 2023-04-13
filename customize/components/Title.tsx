import React from "react";

export const Title: React.FC<any> = ({ title, color = '#dcddde' }) => {
    return (
      <span style={{
          position: 'fixed',
          top: '-10px',
          left: '10px',
          fontSize: '12px',
          fontWeight: 'bold',
          color: color,
      }}>
      {title}
    </span>
    );
};
