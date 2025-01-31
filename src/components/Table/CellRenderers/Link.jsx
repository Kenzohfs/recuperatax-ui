import React from 'react';

const Link = ({ link = '' }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      Download
    </a>
  );
};

export default Link;
