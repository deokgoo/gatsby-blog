import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header"
import "./layout.scss"

const Layout = (props: propsInterface) => {
  let { children } = props;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem`, minHeight: '85vh'}}>
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with Gatsby d9 techBlog
      </footer>
    </>
  )
};

interface propsInterface {
  children: JSX.Element,
}

export default Layout
