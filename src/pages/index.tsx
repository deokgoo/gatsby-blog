import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Profile from '../components/profile';
import SEO from "../components/seo"
import CardBoard from '../components/CardBoard';

const LatestPostListQuery = graphql`
        query LatestPostListQuery {
            allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
                edges {
                    node {
                        excerpt(truncate: true, pruneLength: 200)
                        frontmatter {
                            title
                            path
                            date(formatString: "YYYY-MM-DD HH:mm:ss")
                        }
                        id
                    }
                }
            }
        }
    `;

const IndexPage: React.FC = () => {
  const data = useStaticQuery(LatestPostListQuery);

  return (
    <Layout>
      <>
        <SEO title="d9tech" />
        <Profile />
        {data.allMarkdownRemark.edges.map(({ node }: any) => (
          <CardBoard key={node.id}
                     title={node.frontmatter.title}
                     description={node.excerpt}
                     date={node.frontmatter.date}
                     pageUri={node.frontmatter.path}>
          </CardBoard>
        ))}
      </>
    </Layout>)
};

export default IndexPage;
