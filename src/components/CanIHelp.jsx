import React, { Fragment } from 'react';
import UniqueCanIHelp from './UniqueCanIHelp';
import UseService from '../hooks/useService';

const CanIHelp = () => {
  const services = UseService();

  return (
    <Fragment>
      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>Services</h2>
            <p>
              We build amazing apps, products, and services for the companies
              around the world. Over the past 5 years, we've helped a lot of
              companies for building their 100+ projects.
            </p>
          </header>
          <ul className="features">
            {services.map(service => (
              <UniqueCanIHelp key={service.id} services={service} />
            ))}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default CanIHelp;
