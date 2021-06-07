import React, { Fragment } from 'react';
import Scroll from '../utils/Scroll';
import UseSocial from '../../hooks/useSocial';
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
  const social = UseSocial();
  return (
    <Fragment>
      <section id="banner">
        <div className="inner">
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="icons">
        {social.map(social => {
          const { name, link, icon, style } = social;
          return (
            <li key={link}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={`button primary icon solid  ${style} ${icon}`}
              >{name}
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
          <ul className="actions special">
            <li>
              <Scroll type="id" element="contact">
                <a href="/#" className="button secondary">
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
