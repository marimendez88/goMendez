import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import UseAbout from '../hooks/useAbout';

const PrevAbout = () => {
  const about = UseAbout();

  return (
    <Fragment>
      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>
              {about.title}
              <br />
              {about.subtitle}
            </h2>
            <p>
              {about.description}
              <br />
            </p>
            <h1>{about.whoami}</h1>
            <br />
            <p>{about.me}</p>
          </header>
        </div>
      </section>
    </Fragment>
  );
};

export default PrevAbout;
