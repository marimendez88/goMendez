import React, { Fragment } from 'react';
import Scroll from './Scroll';
import { graphql, useStaticQuery } from 'gatsby';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query Mendez {
      allDatoCmsMendez {
        nodes {
          title
          siteurl
          button
          description
          more
        }
      }
    }
  `);

  const { title, button, description, more } = data.allDatoCmsMendez.nodes[0];

  return (
    <Fragment>
      <section id="banner">
        <div className="inner">
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="actions special">
            <li>
              <Scroll type="id" element="contact">
                <a href="/#" className="button primary">
                  {button}
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="one">
          <a href="#one" className="more">
            {more}
          </a>
        </Scroll>
      </section>
    </Fragment>
  );
};

export default Banner;
