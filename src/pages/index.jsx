import React from 'react';

import Layout from '../components/Layout';

import Banner from '../components/Banner';
import PrevAbout from '../components/PrevAbout';
import SkillSet from '../components/SkillSet';
import CanIHelp from '../components/CanIHelp';

import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <Banner />
    <PrevAbout />
    <SkillSet />
    <CanIHelp />
    <Contact />

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
