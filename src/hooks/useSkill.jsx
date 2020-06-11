import { graphql, useStaticQuery } from 'gatsby';

const useSkill = () => {
  const data = useStaticQuery(graphql`
    query Skill {
      allDatoCmsSkill {
        nodes {
          title
          subtitle
          description
          imagen {
            fluid {
              srcSet
            }
          }
        }
      }
    }
  `);

  return data.allDatoCmsSkill.nodes;
};

export default useSkill;
