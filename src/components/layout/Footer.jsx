import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import UseSocial from '../../hooks/useSocial';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      allDatoCmsContact {
        nodes {
          address
          mail
          copy
          phone
          year
        }
      }
    }
  `);
  const { address, mail, phone, year, copy } = data.allDatoCmsContact.nodes[0];

  const social = UseSocial();

  return (
    <footer id="footer">
      <ul className="icons">
        {social.map(social => {
          const { name, link, icon, style } = social;
          return (
            <li key={link}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={`icon ${style} ${icon}`}
              >
                <span className="label">{name}</span>
              </a>
            </li>
            
          );
        })}
      </ul>

      <ul className="copyright">
        <li>{mail}</li>
        <li>{phone}</li>
      </ul>
      <ul className="copyright">
        <li>{address}</li>
      </ul>
      <ul className="copyright">
        <li>&copy; {copy}</li>
        <li>{year}</li>
      </ul>
    </footer>
  );
};

export default Footer;
