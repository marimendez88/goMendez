import React, { Fragment } from 'react';

import Banner from '../layout/Banner';
import PrevAbout from '../about/PrevAbout';
import SkillSet from '../skills/SkillSet';
import CanIHelp from '../helps/CanIHelp';
import Contact from '../layout/Contact';

const LayoutPage = () => (
  <Fragment>
    <Banner />
    <PrevAbout />
    <CanIHelp />
    <SkillSet />
    <Contact />
  </Fragment>
);

export default LayoutPage;
