import React, { Fragment } from 'react';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import UniqueSkill from './UniqueSkill';
import UseSkill from '../hooks/useSkill';

const SkillSet = () => {
  const skills = UseSkill();

  return (
    <Fragment>
      <section id="two" className="wrapper alt style2">
        <UniqueSkill />
      </section>
    </Fragment>
  );
};

export default SkillSet;
