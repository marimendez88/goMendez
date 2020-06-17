import React, { Fragment } from 'react';

import UseSkill from '../hooks/useSkill';

const UniqueSkill = ({}) => {
  const skills = UseSkill();

  return (
    <Fragment>
      {skills.map(skill => (
        <section className="spotlight">
          <div className="image">
            <img src={skill.imagen.fluid.srcSet} alt="" />
          </div>
          <div className="content">
            <h2>
              {skill.title}
              <br />
            </h2>
            <p>{skill.description}</p>
          </div>
        </section>
      ))}
    </Fragment>
  );
};

export default UniqueSkill;
