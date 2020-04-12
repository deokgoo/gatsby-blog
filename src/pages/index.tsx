import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

import Layout from "../components/layout";
import Profile from '../components/profile';
import SEO from "../components/seo"

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
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,800&display=swap" rel="stylesheet" />
        <SEO title="d9tech" />
        <Profile />
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }: any) => (
            <li key={node.id}>
              <h2>
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </h2>
              <h3>{node.frontmatter.date}</h3>
              <p>{node.excerpt}</p>
              <hr />
            </li>
          ))}
        </ul>
      </>
    </Layout>)
};

export default IndexPage;
