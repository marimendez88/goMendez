import React from 'react';

import Layout from '../components/layout/Layout';
import Banner from '../components/layout/Banner';
import PrevAbout from '../components/about/PrevAbout';
import SkillSet from '../components/skills/SkillSet';
import CanIHelp from '../components/CanIHelp';
import Contact from '../components/layout/Contact';

const IndexPage = () => (
  <Layout>
    <Banner />
    <PrevAbout />
    <CanIHelp />
    <SkillSet />
    <Contact />
  </Layout>
);

export default IndexPage;
