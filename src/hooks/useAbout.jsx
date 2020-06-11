import { graphql, useStaticQuery } from 'gatsby';

const useAbout = () => {
  const data = useStaticQuery(graphql`
    query About {
      allDatoCmsAbout {
        nodes {
          title
          subtitle
          description
          whoami
          me
          about
          author
        }
      }
    }
  `);

  return data.allDatoCmsAbout.nodes[0];
};

export default useAbout;
