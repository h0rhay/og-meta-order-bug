import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetaData = () => {
  const query = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);
  return { ...query.site.siteMetadata };
}

export default useSiteMetaData