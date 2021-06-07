import { graphql, useStaticQuery } from 'gatsby';

const useAbout = () => {
  const data = useStaticQuery(graphql`
    query About {
      allDatoCmsAbout {
        nodes {
          titleH2
          paragraph1
          titleH3
          paragraph2
          titleH32
          paragraph3
          titleH4
          paragraph4
        }
      }
    }
  `);

  return data.allDatoCmsAbout.nodes[0];
};

export default useAbout;
