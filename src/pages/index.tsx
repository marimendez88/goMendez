import React, { Fragment } from 'react';

import Banner from '../components/layout/Banner';
import PrevAbout from '../components/about/PrevAbout';
import SkillSet from '../components/skills/SkillSet';
import CanIHelp from '../components/helps/CanIHelp';
import Contact from '../components/layout/Contact';
import Layout from '../components/layout/Layout';
import '../assets/sass/main.scss';

const IndexPage = () => (
  <Fragment>
    <Banner />
    <PrevAbout />
    <CanIHelp />
    <SkillSet />
    <Contact />
  </Fragment>
);

export default IndexPage;
