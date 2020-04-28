import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header'
import './layout.scss'
import Helmet from 'react-helmet';

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
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,800&display=swap"/>
        <meta name="google-site-verification" content="aDb3jegnszW2WX_61vjA-FLc9XahqIPwRNi-Qwfj6oI" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem`, minHeight: '85vh' }}>
        <main>{children}</main>
      </div>
      <footer style={{textAlign: 'center', marginTop: '1.5rem', marginBottom: '1.5rem'}}>
        © {new Date().getFullYear()}, Built with Gatsby d9 techBlog
      </footer>
    </>
  )
};

interface propsInterface {
  children: JSX.Element,
}

export default Layout
