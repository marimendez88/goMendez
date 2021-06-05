import React, { Fragment } from 'react';

import Banner from '../components/layout/Banner';
import PrevAbout from '../components/about/PrevAbout';
import SkillSet from '../components/skills/SkillSet';
import CanIHelp from '../components/helps/CanIHelp';
import Contact from '../components/layout/Contact';

import '../assets/sass/main.scss';

export interface IProps {}

export interface IState {
  playOrPause?: string;
}

const IndexPage: React.FC = () => {
  return (
    <Fragment>
      <Banner />
      <PrevAbout />
      <CanIHelp />
      <SkillSet />
      <Contact />
    </Fragment>
  );
};

export default IndexPage;
