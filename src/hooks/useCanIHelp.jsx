import { graphql, useStaticQuery } from 'gatsby';

const useCanIHelp = () => {
  const data = useStaticQuery(graphql`
    query CanIHelp {
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

  return data;
};

export default useCanIHelp;
