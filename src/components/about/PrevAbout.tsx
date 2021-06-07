import React, { Fragment } from 'react';

import UseAbout from '../../hooks/useAbout';

const PrevAbout = () => {
  const about = UseAbout();

  return (
    <Fragment>
      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>{about.titleH2}</h2>
            <p>{about.paragraph1}</p>
          </header>
          <h3>{about.titleH3}</h3>
          <br />
          <p>{about.paragraph2}</p>
          <h3>{about.titleH32}</h3>
          <p>{about.paragraph3}</p>
          <h4>{about.titleH4}</h4>
          <p>{about.paragraph4}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default PrevAbout;

