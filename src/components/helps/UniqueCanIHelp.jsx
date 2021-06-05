import React, { Fragment } from 'react';

const UniqueCanIHelp = ({ services }) => {
  const { title, description, icon } = services;
  return (
    <Fragment>
      <li className={icon}>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </Fragment>
  );
};

export default UniqueCanIHelp;
