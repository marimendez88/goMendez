import { graphql, useStaticQuery } from 'gatsby';

const useService = () => {
  const data = useStaticQuery(graphql`
    query Service {
      allDatoCmsServicio {
        nodes {
          title
          description
          icon
        }
      }
    }
  `);

  return data.allDatoCmsServicio.nodes;
};

export default useService;
