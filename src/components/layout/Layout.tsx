import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

const Layout: React.FC = () => {
  // props = [];
  // state;

  // const { children, fullMenu } = this.props;
  // const { isPreloaded } = this.state;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          {/* <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    'Web design and development,We offer fresh solutions, the expertise, speed & responsiveness of a global company, and the forward thinking and agility of a technology startup. ',
                },
                {
                  name: 'keywords',
                  content:
                    'site, web, agency, tamarindo, software, potrero, web design, web develop, marketing',
                },
              ]}
            >
              <html lang="en" />
            </Helmet> */}
          <div
          // className={
          //   isPreloaded ? 'landing main-body is-preload' : 'landing main-body'
          // }
          >
            <div id="page-wrapper">
              {/* <SideBar fullMenu={fullMenu} />
              {children}
              <Footer /> */}
            </div>
          </div>
        </>
      )}
    />
  );

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
};
export default Layout;
