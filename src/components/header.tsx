import {Link} from 'gatsby';
import React from 'react';

const Header = (props: { siteTitle: string }) => {
  let {siteTitle} = props;
  return (
    <header style={{background: `black`, marginBottom: `1.45rem`, minHeight: '10vh'}}>
      <div
        style={{margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: 'flex', flexDirection: 'row'}}>
        <Link to="/" style={{color: `white`, textDecoration: `none`, fontFamily: `Raleway`, fontSize: '3rem'}}>
          {siteTitle}
        </Link>
      </div>
    </header>);
};

export default Header
