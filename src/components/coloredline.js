import React from 'react';

const ColoredLine = ({ color }) => (
    <hr
        style={{
	    marginTop: 10,
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

export default ColoredLine;
