import React, { Fragment } from 'react';
import UniqueCanIHelp from './UniqueCanIHelp';
import UseService from '../../hooks/useService';

const CanIHelp = () => {
  const services = UseService();

  return (
    <Fragment>
      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>How can I help you?</h2>
            <p>
              I can help you build amazing apps, products, and services for companies around
              the world. Over the past 6 years, I've built 100+ projects.
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
