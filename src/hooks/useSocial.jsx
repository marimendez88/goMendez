import { graphql, useStaticQuery } from 'gatsby';

const useSocial = () => {
  const data = useStaticQuery(graphql`
    query Social {
      allDatoCmsSocial {
        nodes {
          name
          user
          link
          icon
          style
        }
      }
    }
  `);

  return data.allDatoCmsSocial.nodes;
};

export default useSocial;
