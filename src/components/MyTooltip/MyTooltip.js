import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const MyTooltip = ({text, className}) => {
  const classes = className || '';
  return (
    <Tooltip className={classes} title={text}>
      <p>{text}</p>
    </Tooltip>
  );
};

export default MyTooltip;
